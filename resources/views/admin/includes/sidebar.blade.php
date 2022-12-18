<div class="sidebar" data-color="purple" data-image="{{asset('admin/assets/img/sidebar-1.jpg')}}">
    <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

        Tip 2: you can also add an image using data-image tag
    -->

    <div class="logo">
        <a href="{{url('index')}}" class="simple-text">
           MJ INFO TECHS
        </a>

    </div>


    <div class="sidebar-wrapper">
        <ul class="nav">
            <li class="active">
                <a href="{{url('admin/dashboard')}}">
                    <i class="material-icons">dashboard</i>
                    <p>Dashboard</p>
                </a>
            </li>
            <li>
                <a href="{{url('admin/users')}}">
                    <i class="material-icons">person</i>
                    <p>All User</p>
                </a>
            </li>
            <li>
                <a href="{{url('admin/contact')}}">
                    <i class="material-icons">contact_mail</i>
                    <p>Contact Messages</p>
                </a>
            </li>
            <li>
                <a href="{{url('admin/profile')}}">
                    <i class="material-icons">account_circle</i>
                    <p>Profile</p>
                </a>
            </li>
            <li>
                <a href="{{url('admin/profile')}}">
                    <i class="material-icons">vpn_key</i>
                    <p>Change Password</p>
                </a>
            </li>

        </ul>
    </div>
</div>