@extends('admin.includes.main')
@section('title','all contact message')
@section('content')

        <div class="content">
            <div class="container-fluid">

                 <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header " data-background-color="purple">

                        <h4>View Message</h4>

                    </div>
                    <div class="card-content pl-3">
                        <p class="">{{$contact->name}}</p>
                        <hr>
                        <p class="">{{$contact->email}}</p>
                        <hr>
                        <p class="">{{$contact->phone}}</p>
                        <hr>
                        <p class="">{{($contact->message) }}</p>
                    </div>
                    <div class="card-footer">
                        <div class="stats">
                            <i class="material-icons">access_time</i> {{$contact->created_at->diffForHumans()}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

            </div>
        </div>

@endsection