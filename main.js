function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/61N35EybA/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) 
{
    if (error) 
    {
        console.error (error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
   
        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r+","+ random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r+","+ random_number_g+","+random_number_r+")";    
    
        img = document.getElementById('https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg');
        img1 = document.getElementById('');
        

        if (results[0].label == "Meow") {
          img.src = 'cat.gif';
          img3.src = 'https://th.bing.com/th/id/OIP.VOe4lBI0oZOADZH9CaU55wHaE6?w=243&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7';  
        }
        else if (results[0].label == "Bark") {
            img.src = 'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';  
            img1.src = 'giphy.gif';
          }
          else 
          {
            img.src = 'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';  
            img1.src = 'https://th.bing.com/th/id/OIP.VOe4lBI0oZOADZH9CaU55wHaE6?w=243&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7';
          }
    }
}