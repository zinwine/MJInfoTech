@extends('admin.includes.main')
@section('title','all contact message')
<style>
    .pagination>.active>span{
        background-color: #9E37B4!important; ;
    }
</style>
@section('content')

        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    @if(session('status'))
                        <p class="alert alert-success">{{session('status')}}</p>
                    @endif

                    <div class="col-md-12">
                        <div class="card card-plain">
                            <div class="card-header" data-background-color="purple">
                                <h4 class="title">View All Contact Message</h4>
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
                                    <?php $i=($contacts->currentPage()-1)*$contacts->perPage()+1; ?>
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
                            <div class="col-md-12">
                                {{$contacts->links()}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

@endsection