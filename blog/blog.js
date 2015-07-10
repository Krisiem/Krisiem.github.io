$(document).on("ready", function(){
    var postSource   = $("#post-template").html();
    var postTemplate = Handlebars.compile(postSource);
 
    // $.get("http://krisiem-github-io-krisiem.c9.io/blog/posts.json", function(data){
    //     console.log(data);
    // });
    
    $.get("posts.json", function(data){
       for(var i = 0; i < data.length; i++){
           data[i];
           $("#NewPost").prepend(postTemplate(data[i]));
       }
    });
    
    $("form").on("submit", function(event){
        event.preventDefault();
        
    
        var NewPost = { 
            title: $("input[name=title]").val(),
            body: $("textarea[name=body]").val(),
       
        };
        $("#NewPost").prepend(postTemplate(NewPost));
        $.post("posts", NewPost);
    });
});
