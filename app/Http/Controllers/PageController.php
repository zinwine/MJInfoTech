<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;


class PageController extends Controller
{
    public function index(){
        return view('index');
    }
    public function about(){
        return view('my_about');
    }
    public function contact(){
        return view('my_contact');
    }
    public function digital(){
        return view('digital_marketing');
    }
    public function branding(){
        return view('branding');
    }
    public function facebook(){
        return view('facebook_page_management');
    }
    public function tele(){
        return view('TeleMarketing');
    }
    public function contactStore(Request $request)
{
    Contact::create([
        'name'=>$request->get('name'),
        'phone'=>$request->get('phone'),
        'email'=>$request->get('email'),
        'message'=>$request->get('message'),
    ]);
    return redirect()->back()->with('status','Successfully Send Message');
}


}