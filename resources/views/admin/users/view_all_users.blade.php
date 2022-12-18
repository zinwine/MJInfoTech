@extends('admin.includes.main')
@section('title','all user')
<style>
    .pagination>.active>span{
          background-color: #9E37B4!important; ;
      }
</style>
@section('content')

        <div class="content">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-md-12">

                        @if(session('status'))
                            <p class="alert alert-success">{{ session('status') }}</p>
                        @endif

                        @role('admin')
                        <div class="card">
                            <div class="card-header" data-background-color="purple">
                                <h4 class="title">Admin List</h4>
                            </div>
                            <div class="card-content table-responsive">
                                <table class="table">
                                    <thead class="text-primary">
                                    <th>Username</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th></th>
                                    </thead>
                                    <tbody>
                                    @foreach($admin_users as $user)
                                        <tr>
                                            <td>{{ $user->name }}</td>
                                            <td>{{ $user->f_name }}</td>
                                            <td>{{ $user->l_name }}</td>
                                            <td>{{ $user->email }}</td>
                                            <td><a href="{{ url("/admin/user/$user->id/edit") }}">Edit</a></td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        @endrole

                        @role('admin')
                        @if($sub_admin_users != '[]')
                            <div class="card">
                                <div class="card-header" data-background-color="purple">
                                    <h4 class="title">Sub Admin List</h4>
                                </div>
                                <div class="card-content table-responsive">
                                    <table class="table">
                                        <thead class="text-primary">
                                        <th>Username</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th></th>
                                        </thead>
                                        <tbody>
                                        @foreach($sub_admin_users as $user)
                                            <tr>
                                                <td>{{ $user->name }}</td>
                                                <td>{{ $user->f_name }}</td>
                                                <td>{{ $user->l_name }}</td>
                                                <td>{{ $user->email }}</td>
                                                <td><a href="{{ url("/admin/user/$user->id/edit") }}">Edit</a></td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        @endif
                        @endrole

                        @if(count($users) > 0)
                            <div class="card">
                                <div class="card-header" data-background-color="purple">
                                    <h4 class="title">User List</h4>
                                </div>
                                <div class="card-content table-responsive">
                                    <table class="table">
                                        <thead class="text-primary">
                                        <th>Username</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        @role('admin')
                                        <th></th>
                                        @endrole
                                        </thead>
                                        <tbody>
                                        @foreach($users as $user)
                                            <tr>
                                                <td>{{ $user->name }}</td>
                                                <td>{{ $user->f_name }}</td>
                                                <td>{{ $user->l_name }}</td>
                                                <td>{{ $user->email }}</td>
                                                @role('admin')
                                                <td><a href="{{ url("/admin/user/$user->id/edit") }}">Edit</a></td>
                                                @endrole
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>

                                    <div class="col-md-12">
                                        {{ $users->links() }}
                                    </div>
                                </div>
                            </div>
                        @endif
                    </div>

                </div>
            </div>
        </div>

@endsection