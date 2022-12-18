@extends('admin.includes.main')
@section('title','all contact message')
@section('content')

        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-plain">
                            <div class="card-header" data-background-color="purple">
                                <h4 class="title">Users for {{$search}}</h4>
                                {{--<p class="category">Here is a subtitle for this table</p>--}}
                            </div>
                            <div class="card-content table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                    <th>No</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Edit</th>

                                    </thead>
                                    <tbody>
                                    <?php $i=1; ?>
                                    @foreach($users as $user)
                                        <tr>
                                            <td><?php echo $i++; ?></td>
                                            <td>{{$user->f_name}}</td>
                                            <td>{{$user->l_name}}</td>
                                            <td>{{$user->name}}</td>
                                            <td>{{$user->email}}</td>
                                            <td><a href="{{url('admin/user/edit/'.$user->id)}}">Edit</a></td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-plain">
                            <div class="card-header" data-background-color="purple">
                                <h4 class="title">View Contact Message for {{$search}}</h4>
                                {{--<p class="category">Here is a subtitle for this table</p>--}}
                            </div>
                            <div class="card-content table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>View</th>
                                    <th>Delete</th>

                                    </thead>
                                    <tbody>
                                    <?php $i=1; ?>
                                    @foreach($contacts as $contact)
                                        <tr>
                                            <td><?php echo $i++; ?></td>
                                            <td>{{$contact->name}}</td>
                                            <td>{{$contact->phone}}</td>
                                            <td>{{$contact->email}}</td>
                                            <td><?php echo substr($contact->message,0,50) ?></td>
                                            <td><a href="{{url('admin/contact/show/'.$contact->id)}}">Read More</a></td>
                                            <td><a href="{{url('admin/contact/delete/'.$contact->id)}}">Delete</a></td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

@endsection