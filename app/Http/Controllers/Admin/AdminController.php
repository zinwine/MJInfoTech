<?php

namespace App\Http\Controllers\Admin;

use App\Contact;
use App\Http\Requests\ChangePasswordRequest;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function dashboard()
    {
        $users = User::all();
        $contacts = Contact::all();
        return view('admin.dashboard',compact('users','contacts'));
    }
    public function user()
    {
        $admin_users = User::role('admin')->get();
        $sub_admin_users = User::role('sub-admin')->get();
        $users = User::role('user')->paginate(1);

        return view('admin.users.view_all_users', compact('users','sub_admin_users','admin_users'));
    }
    public function profile()
    {
        return view('admin.profile');
    }
    public function contact()
    {
        $contacts = Contact::paginate(9);
        return view('admin.contact.view_contact',compact('contacts'));
    }
    public function userIndex()
    {
        $users = User::paginate(9);
        return view('admin.users.view_all_users', compact('users'));
    }
    public function profileUpdate(Request $request)
    {

        $user = User::find($request->get('user_id'));
        $user->f_name=$request->get('f_name');
        $user->l_name=$request->get('l_name');
        $user->name=$request->get('name');
        $user->update();
        return redirect()->back()->with('status','Successfully Update User');
    }
    public function changePassword(ChangePasswordRequest $request)
    {
        $user = Auth::user();
        $old_password = Auth::User()->password;

        if (Hash::check($request['old_password'], $old_password)) {
            $user_id = Auth::User()->id;
            $user = User::find($user_id);
            $user->password = Hash::make($request['password']);
            $user->save();
            return redirect()->back()->with('password_status', 'Password has been change.');
        } else {
            return redirect()->back()->with('password_fail', 'Please enter correct current password');
        }
    }
    public function userEdit($id)
    {
        $user = User::find($id);
        $roles = Role::all();
        $selectedRoles = $user->roles()->pluck('name')->toArray();
        return view('admin.users.edit_user',compact('user','roles','selectedRoles'));

    }
    public function userUpdate(Request $request,$id)
    {
        $user = User::find($id);
        $user->syncRoles($request->get('role'));
        return redirect('admin/users')->with('status','Successfully User Edit..');
    }
    public function contactShow($id)
    {

        $contact = Contact::find($id);

        return view('admin.contact.single_contact',compact('contact'));
    }
    public function contactDestroy($id)
    {

        $contact = Contact::find($id);
        $contact->delete();
        return redirect()->back()->with('status','Successfully Deleted Contact Message');
    }
    public function search(Request$request)
    {
        $search = $request->get('search');
        $users = User::where('name','like','%'.$search.'%')->orderBy('name')->get();
        $contacts = Contact::where('name','like','%'.$search.'%')->orderBy('name')->get();
        return view('admin.search',compact('search','users','contacts'));
    }

}
