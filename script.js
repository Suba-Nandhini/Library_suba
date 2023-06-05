var array=[
  {
    title: "Harrypotter",
    author:"J K Rowling",
    subject:"Adventure",
    publish:"26 june 1997"
  },
  {
    title:"Mindset: The New Psychology",
    author:"Carol Dweck",
    subject:"Growing Mindset",
    publish:"28 Feb 2006"
  },
  {
    title:"How U.S. Navy Seals Lead and Win",
    author:"Jocko Willink",
    subject:"Leadership",
    publish: "20 Oct 2015"
  },
  {
    title:"Man's Search For Meaning",
    author:"Viktor Frankl",
    subject:"Meaning of your experience",
    publish: "15 Aug 1946"
  },
  {
    title:"Naked in Death",
    author:"J D Robb",
    subject:"Romance",
    publish:"28 july 1995"
  },
  {
    title:"The girl in Room 105",
    author:"Chetan Bhagat",
    subject:"Thriller",
    publish:"20 july 2022"
  },
  {
    title:"Mr.Perfect",
    author:"Lindahoward",
    subject:"Thriller",
    publish:"4 Oct 2000"
  },
  {
    title:"Verity",
    author:"Colleen Hoover",
    subject:"Fiction",
    publish:"7 Dec 2018",
  },
  {
    title:"The House of strange Stories",
    author:"Ruskin Bond",
    subject:"Fiction",
    publish:"13 July 2020"
  },
  {
    title:"Write Behind her",
    author:"Melinda Leigh",
    subject:"Fiction",
    publish:"14 Sep 2021"
  },
  {
    title:"Blue Umberlla",
    author:"Ruskin Bond",
    subject:"Child",
    publish:"12 Mar 1974"
  },
  {
    title:"Glory in Death",
    author:"J D Robb",
    subject:"Romance",
    publish:"13 June 1995"
  },
  {
    title:"It starts with us",
    author:"Colleen Hoover",
    subject:"Romance",
    publish:"18 Oct 2022"
  },
  {
    title:"After the Night",
    author:"Linda Howare",
    subject:"Fiction",
    publish:"18 Mar 1995"
  },
  {
    title:"Dead against her",
    author:"Melinda Leigh",
    subject:"Mystery",
    publish:"17 May 2022"
  },
  {
    title:"Mackenzie's Mountain",
    author:"Linda Howard",
    subject:"Adventure",
    publish:"2 Jun 1989"
  },
  {
    title:"Mackenzie's Mission",
    author:"Linda Howard",
    subject:"Adventure",
    publish:"4 july 1992"
  },
  {
    title:"Mackenzie's Magic",
    author:"Linda Howard",
    subject:"Adventure",
    publish:"28 Feb 2014"
  }
]

//show table data
function showtable(curarray){
  document.getElementById("mytable").innerHTML=`
  <tr class="bg-primary text-white fw-bold">
    <td>Title</td>
    <td>Author</td>
    <td>Subject</td>
    <td>Publish date</td>
  </tr>`
  ;
  //for checking array is empty
  if(curarray==""){
    document.getElementById("error").innerHTML=`<span class="text-danger">Not found !</span>`;
  }
  else{
    document.getElementById("error").innerHTML="";
    for(var i=0;i<curarray.length;i++){
      document.getElementById("mytable").innerHTML+=`
      <tr>
        <td>${curarray[i].title}</td>
        <td>${curarray[i].author}</td>
        <td>${curarray[i].subject}</td>
        <td>${curarray[i].publish}</td>       
      </tr>`
    }
  }
}
//Calling show table method
showtable(array);

// take filter data array

var newarray=[];

//for searching method
var a=0;
document.getElementById("search").addEventListener("keyup",function()
{
  //var search=this.value.toLowerCase();
  
  var search=document.getElementById("search").value;
  newarray=array.filter(function(val){
    if(val.title.includes(search) || val.author.includes(search) || val.subject.includes(search) || val.publish.includes(search))
    {
      a+=1;
      var newobj={title:val.title, author:val.author ,subject:val.subject, publish:val.publish};
      
      return newobj;
    }
    
  })
  showtable(newarray);
 alert("Number of Books:"+newarray.length);
 
}


)

