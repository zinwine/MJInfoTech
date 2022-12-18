@extends('includes.main')
@section('title','about')
@section('content')

	<style>

		@media (max-width: 768px) {
			.custom_row {
				display: flex;
				flex-direction: column
			}
			.custom_row > div:first-of-type {
				order: 1
			}
		}
	</style>

    <!-- Nav End  -->

    {{--<div class="container-fluid mt-4">--}}
	{{--<div class="row">--}}
		{{--<div class="col-sm-12 py-4 bg-info text-center contact_header">--}}
			{{--<h2 class="py-2 font-weight-bold text-white">ABOUT US</h2>--}}
		{{--</div>--}}
	{{--</div>--}}
{{--</div>--}}

<div class="container-fluid mt-3">
	<div class="row">
		<div class="col-sm-12 about_image">
			<img src="{{asset('project/img/5.png')}}" alt="" class="img-fluid">
		</div>
		
	</div>
</div>
<div class="container-fluid">

	<div class="row justify-content-center about_content">
		<div class="col-md-3 my-4 py-4 about_content_left">
			<h2 class="my-4 pl-3 hvr-wobble-horizontal animated zoomIn">RESPONSIBLE</h2>
			<p class="px-3 text-center mt-3">Your web page isn’t only web design and development but also you need the right people. Our company values of integrity, team work, attitude and passion to commit outstanding customer services as well as guiding our daily, weekly or monthly actions to our lovely customer. We strive to meet the customer’s to give the best idea and creation.
			</p>
		</div>
		<div class="col-md-6 my-4 py-4 about_content_right">
		
			<h2 class="hvr-bounce-out my-4 pl-5 wow bounceInDown" data-wow-duration="2s" data-wow-delay=".05s">ABOUT US</h2>
			<p class="pl-5 mb-4">MJ Info Tech is an IT and Web developing company which was founded in 2017. We are here for our customer to given best Website design and development. We offer a full range of IT and customer services that enable you to bridge the gap between you and new technologies.  The one that they are using all over the world, kind of Tele marketing and online advertising can give it to our customer’s business successfully. We are ready to service for our business concern with our best services. And we provide extraordinary services with the innovative technologies to our customers. Your web page is your vision and our well-organized dynamic and innovative team to provide for our customer by using efficient and operative ways.</p>			
		</div>
	</div>
	<div class="row justify-content-center about_content custom_row">


		<div class="col-md-5 my-4 py-4 about_content_right">
			<h2 class="mb-4 pl-5 wow bounceInLeft" data-wow-duration="3s" data-wow-delay=".1s">WHO ARE WE?</h2>
			<p class="pl-5">MJ Info Teach Co.,ltd is leading information business service provider company in Myanmar. It also offers website developing, domain registration, telemarketing and digital marketing for better. At MJ Info Teach Co., ltd, we believe actions are all that matter and not words. One Design Company is an experienced and passionate group of designers, developers and writers. Every client we work with becomes a part of the team. Together we face the challenges and celebrate the victories.</p>
		</div>
		<div class="col-md-5 my-4 py-4 about_content_right">
			<div class="col-sm-12 mb-3">
				<img src="{{asset('project/img/9.jpg')}}" alt="" class="hvr-bob img-fluid wow bounceInRight" data-wow-duration="3s" data-wow-delay=".1s">
			</div>
		</div>
	</div>

</div>

	<!--************* Footer Start**************-->

@endsection