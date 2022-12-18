@extends('admin.includes.main')
@section('title','dashboard')
@section('content')

        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header" data-background-color="purple">
                                <h4 class="title">Edit Profile</h4>
                                {{--<p class="category">Complete your profile</p>--}}
                            </div>
                            <div class="card-content">
                                <form method="post">
                                    {{csrf_field()}}

                                    @if(session('status'))
                                        <p class="alert alert-success">{{session('status')}}</p>

                                    @endif


                                     <input type="hidden" name="user_id" value="{{Auth::user()->id}}">

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group label-floating">
                                                <label class="control-label">Fist Name</label>
                                                <input type="text" name="f_name" class="form-control" value="{{Auth::user()->f_name}}" >
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group label-floating">
                                                <label class="control-label">Last Name</label>
                                                <input type="text" name="l_name" class="form-control" value="{{Auth::user()->l_name}}" >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group label-floating">
                                                <label class="control-label">Username</label>
                                                <input type="text" name="name" class="form-control" value="{{Auth::user()->name}}" >
                                            </div>
                                        </div>
                                     </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group label-floating">
                                                <label class="control-label">Email address</label>
                                                <input type="email" value="{{Auth::user()->email}}" class="form-control" disabled>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
                                    <div class="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header" data-background-color="purple">
                                <h4 class="title">Change Password</h4>
                                {{--<p class="category">Complete your profile</p>--}}
                            </div>
                            <div class="card-content">
                                <form method="post" action="{{ url('/change-password') }}">

                                    {{csrf_field()}}

                                    @if(session('password_status'))
                                        <p class="alert alert-success">{{ session('password_status') }}</p>
                                    @endif

                                    @if(session('password_fail'))
                                        <p class="alert alert-danger">{{ session('password_fail') }}</p>
                                    @endif

                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group label-floating">
                                                <label class="control-label">New Password</label>
                                                <input type="password" name="password" class="form-control" >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group label-floating">
                                                <label class="control-label">Confirm Password</label>
                                                <input type="password" name="password_confirmation" class="form-control" >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group label-floating">
                                                <label class="control-label">Old Password</label>
                                                <input type="password" name="old_password" class="form-control" >
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary pull-right">Change</button>
                                    <div class="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

@endsection