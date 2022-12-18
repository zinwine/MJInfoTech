@extends('admin.includes.main')
@section('title','dashboard')
@section('content')

    <?php $us = count($users);
          $con =  count($contacts);
    ?>

        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="card card-stats">
                            <div class="card-header" data-background-color="orange">
                                <i class="material-icons">person</i>
                            </div>
                            <div class="card-content">
                                <p class="category">All Users</p>
                                <h3 class="title"><?php echo $us ?><small> Persons</small></h3>
                            </div>
                            <a href="{{url('admin/users')}}">
                            <div class="card-footer">
                                <div class="stats">
                                    <i class="material-icons text-primary"></i>View More ...
                                </div>
                            </div>
                            </a>

                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="card card-stats">
                            <div class="card-header" data-background-color="green">
                                <i class="material-icons">mail</i>
                            </div>
                            <div class="card-content">
                                <p class="category">Contact Massages</p>
                                <h3 class="title"><?php echo $con ?><small> Mails</small></h3>
                            </div>
                            <a href="{{url('admin/contact')}}">
                                <div class="card-footer">
                                    <div class="stats">
                                        <i class="material-icons"></i> view more ...
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    @endsection