var imageInput = document.getElementById("imageInput");
var videoInput = document.getElementById("videoInput");
var colorInput = document.getElementById("colorInput");
var textColorBtn = document.getElementById("textColorBtn");

var buttons = document.querySelectorAll(".btn")
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        var command = button.dataset['element'];

        if(command.startsWith('h')){
            document.execCommand('formatBlock',false,command)

        }
      else if(command==="insertImage"){
        imageInput.click();

       }else if(command==="insertVideo"){
        videoInput.click();
       } 
       else if (command === "fontName") {
        var font = button.getAttribute('data-font');
        document.execCommand("fontName", false, font);
    }
    else if(command==="lineHeight"){
        var lineHeight = button.getAttribute('data-line-height');
        var selection = window.getSelection();
        var range =  selection.getRangeAt(0);
        var span = document.createElement("span");
        span.style.lineHeight=lineHeight;
      range.surroundContents(span);
      }
    
          else{
            document.execCommand(command,false,null);

          }  
        
    })
});


// Handle image input change

imageInput.addEventListener("change",(e)=>{
    var target = e.target.files[0];
    if(target){
        var reader = new FileReader();
        reader.onload = (e)=>{
            var img = document.createElement('img');
            img.src=e.target.result;
            img.style.maxWidth='220px';
            img.style.maxHeight= '150px';
            var contentEditable = document.querySelector('.content');
            contentEditable.appendChild(img);
        };
    }reader.readAsDataURL(target);
})


// Handle video  input change


videoInput.addEventListener("change",(e)=>{
    var video = e.target.files[0];
    if(video){
            var reader =new FileReader();
            reader.onload = (e)=>{
                var video = document.createElement("video");
                video.src=e.target.result;
                video.controls = true;
                video.style.maxWidth = '400px';  
                video.style.maxHeight = '300px';
                var contentEditable = document.querySelector('.content');
                contentEditable .appendChild(video)
             
            }
    };
    reader.readAsDataURL(video);

})


var textColorBtn = document.getElementById("textColorBtn");
var colorPickerDropdown = document.querySelector(".color-picker-dropdown");
var colorChoices = document.querySelectorAll(".color-choice");

// Toggle color picker dropdown visibility when palette icon is clicked
textColorBtn.addEventListener("click", () => {
    colorPickerDropdown.style.display = colorPickerDropdown.style.display === "none" ? "flex" : "none";
});

// Apply the selected color to the text
colorChoices.forEach(colorBtn => {
    colorBtn.addEventListener("click", (e) => {
        var selectedColor = e.target.dataset.color;
        document.execCommand("foreColor", false, selectedColor);
        colorPickerDropdown.style.display = "none"; // Hide color picker after selecting
    });
});



