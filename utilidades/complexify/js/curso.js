

$("#txtPass").complexify({}, function(valid,complexify){
    console.log(valid,complexify);
    // alert("Password complexify: " + complexify);

    var $progressBar = $("#progressBar")

    $progressBar.css('width', complexify + '%');

    if( complexify >= 40){
        $progressBar
            .addClass('progress-bar-success')
            .removeClass('progress-bar-danger');
    }
    else{
        $progressBar
            .addClass('progress-bar-danger')
            .removeClass('progress-bar-danger');
    }
});