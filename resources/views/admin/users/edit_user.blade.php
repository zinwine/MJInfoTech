@extends('admin.includes.main')
@section('title','dashboard')
@section('content')

        <div class="content">
            <div class="container-fluid">
                <div class="row ">
                    <div class="col-md-8 justify-content-center">
                        <div class="card">
                            <div class="card-header" data-background-color="purple">
                                <h4 class="title">Edit User</h4>
                                {{--<p class="category">Complete your profile</p>--}}
                            </div>
                            <div class="card-content">
                                <form method="post">
                                    {{csrf_field()}}
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group label-floating">
                                                <label class="control-label">Fist Name</label>
                                                <input type="text" class="form-control" value="{{$user->f_name}}" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group label-floating">
                                                <label class="control-label">Last Name</label>
                                                <input type="text" class="form-control" value="{{$user->l_name}}" disabled>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group label-floating">
                                                <label class="control-label">Username</label>
                                                <input type="text" class="form-control" value="{{$user->name}}" disabled>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group label-floating">
                                                <label class="control-label">Email address</label>
                                                <input type="email" class="form-control" value="{{$user->email}}" disabled>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group label-floating">
                                                <label for="role" class="control-label">Roles</label>
                                                <select name="role" id="role" class="form-control">
                                                    @foreach($roles as $role)
                                                        <option value="{{$role->name}}" @if(in_array($role->name,$selectedRoles)) selected @endif>{{$role->name}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <button type="submit" class="btn btn-primary pull-right">Update User</button>
                                    <div class="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

@endsection