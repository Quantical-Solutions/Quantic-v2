@extends('template')

@section('title')
    Quantic - Admin
@endsection

@section('content')
    <div id="modalInfo">
        <h4>PHP infos:</h4>
    @foreach($user as $key => $value)
        <p><b>{{ $key }}: </b>{{ $value }}</p>
    @endforeach
    </div>
@endsection