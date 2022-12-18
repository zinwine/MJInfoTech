<div id="Navbar" >
    <nav class="navbar navbar-toggleable-md navbar-light bg-primary">

        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id="Navbar_Brand" class="navbar-brand ">
            <img src="{{asset('project/img/MJ.png')}}" alt="" class="img-responsive">
        </div>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">

            <ul class="navbar-nav ">

                <li class="nav-item ">
                    <a class="nav-link hvr-bob" href="{{url('index')}}">Home </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link hvr-bob" href="{{url('about')}}">About Us</a>
                </li>
                <li class="nav-item left ">
                    <a class="nav-link hvr-bob" href="{{url('contact')}}">Contact Us</a>
                </li>

                <li class="nav-item dropdown right">
                    <a class="nav-link dropdown-toggle hvr-bob" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Our Service</a>
                    <ul>

                        <li>
                            <a href="{{url('digital')}}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-hand-o-right"></i></span>Digital Marketing
                            </a>
                        </li>

                        <li>
                            <a href="{{url('tele')}}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-hand-o-right"></i></span>Tele Marketing
                            </a>
                        </li>

                        <li>
                            <a href="{{url('branding')}}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-hand-o-right"></i></span>Branding
                            </a>
                        </li>

                        <li>
                            <a href="{{url('web')}}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-hand-o-right"></i></span>Web Service
                            </a>
                        </li>

                        <li>
                            <a href="{{url('facebook')}}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-hand-o-right"></i></span>Facebook page Management
                            </a>
                        </li>

                    </ul>
                </li>

                    @if(Auth::check())
                        @role('user')
                            <li class="nav-item">
                                <a class="nav-link hvr-bob" href="{{url('admin/profile')}}" >Profile</a>
                            </li>
                         @else
                            <li class="nav-item">
                                <a class="nav-link hvr-bob" href="{{url('admin/dashboard')}}" >Admin</a>
                            </li>
                         @endrole

                    <li class="nav-item">
                        <a class="nav-link hvr-bob" href="{{url('logout')}}" >Logout</a>
                    </li>
                 @else
                        <li class="nav-item">
                            <a class="nav-link hvr-bob" href="{{url('register')}}" >Register</a>
                        </li>
                    <li class="nav-item">
                        <a class="nav-link hvr-bob" href="{{url('login')}}" >Login</a>
                    </li>

                @endif

            </ul>

        </div>



    </nav>


</div>