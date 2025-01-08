suggestion={
    happy: [
        "Yasss! Keep slaying! 😄✨",
        "You are shining brighter than my screen at midnight! 🌟",
        "Don't stop the vibe; the world needs your energy! 🔥✨",
        "Damn, who gave you permission to be this amazing? 😎💖"
    ],
    sad: [
        "Bruh, eat some ice cream 🍦 and watch Netflix. It'll be okay. 💖",
        "C'mon now, you're too iconic to feel this way. ",
        "Call your bestie and spill the tea—it helps, I swear. ☕📞",
        "Treat yourself to something fancy; you're worth it! 💎"
    ],
    angry: [
        "Take a deep breath, king/queen. 😤 You're too cool for this drama. ",
        "Channel that rage into a workout and be a beast! 🏋️‍♂️🔥",
        "Break something cheap, like a pencil—not your phone. ✏️💔",
        "Write a diss track in your head, it'll feel epic. 🎤🎶"
    ],
    tired: [
        "Go nap, you deserve it. 😴 Don't let the world dim your sparkle. ✨",
        "Coffee or nap? Either way, you're still slaying. ☕💁‍♀️",
        "Order food, put on PJs, and call it a day. 🍕🎥",
        "Binge-watch your comfort series, you earned it! 📺❤️"
    ]
}
mood = document.querySelectorAll(".moodcard")
suggestionarea=document.querySelector(".suggestion h1")


mood.forEach(e => {
    e.addEventListener("click",()=>{
        randomnum=Math.floor(Math.random()*suggestion.happy.length)
console.log(randomnum);
        const moodname=e.querySelector('p')
        if(moodname){
            console.log(moodname.textContent);

            if(moodname.textContent==="Happy"){
                
                suggestionarea.textContent=suggestion.happy[randomnum]
            }
            else if(moodname.textContent==="Sad"){
                
                suggestionarea.textContent=suggestion.sad[randomnum]
            }
            else if(moodname.textContent==="angry"){
                
                suggestionarea.textContent=suggestion.angry[randomnum]
            }
            else{
                
                suggestionarea.textContent=suggestion.tired[randomnum]
            }
        }
        
    })
    
});

