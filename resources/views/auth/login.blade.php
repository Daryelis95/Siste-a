@extends('base')
@section('css')
    <!-- bower:css -->
    <link rel="stylesheet" href="/lib/fonts/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/lib/fonts/ionicons/css/ionicons.min.css">
    <link rel="stylesheet" href="/lib/styles/auth.css">
    <link rel="stylesheet" href="/dogs/app/styles/estilo.css">
@endsection
@section('content')
    <main class="auth-main">
        <div class="auth-block text-center">
            <h1 class="titulo">SISTEMA DE BECAS</h1>

            <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                {{ csrf_field() }}
                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">

                    <div class="col-sm-12 text-left">
                        <label for="inputEmail3" class="control-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email" name="email" value="{{ old('email') }}" required autofocus>
                        @if ($errors->has('email'))
                            <span class="help-block">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>
                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">

                    <div class="col-sm-12 text-left">
                        <label for="inputPassword3" class="control-label">Contraseña</label>
                        <input type="password" class="form-control" name="password" id="inputPassword3" placeholder="Contraseña">
                        @if ($errors->has('password'))
                            <span class="help-block">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <button type="submit" class="btn btn-default btn-auth">Iniciar sesión</button><br>
                        <a  class="forgot-pass" href="{{ route('password.request') }}">Olvidaste tu contraseña?</a>
                    </div>
                </div>
            </form>
        </div>
    </main>
@endsection