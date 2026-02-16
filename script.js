/* Admission Success */
document.getElementById("admissionForm").addEventListener("submit", function(e){
e.preventDefault();
document.getElementById("successMessage").style.display="block";
this.reset();
});

/* Department Details */
const details = {
cs:{
title:"Computer Science Department",
text:"Offers AI, Machine Learning, Cybersecurity, Data Science, Software Development. Labs equipped with latest technologies."
},
mech:{
title:"Mechanical Engineering Department",
text:"Focuses on Robotics, Automotive Systems, Manufacturing, Thermal Engineering with modern workshops."
},
business:{
title:"Business Administration Department",
text:"Covers Marketing, Finance, HR, Entrepreneurship with real-world case studies."
},
medicine:{
title:"Medical Department",
text:"Provides MBBS, Clinical Training, Advanced Research Labs, Experienced Doctors and Hospital Training."
}
};

function openModal(dept){
document.getElementById("modal").style.display="flex";
document.getElementById("modalTitle").innerText=details[dept].title;
document.getElementById("modalText").innerText=details[dept].text;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}
