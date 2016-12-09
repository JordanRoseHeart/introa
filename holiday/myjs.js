var imageArray = [
	"https://i.ytimg.com/vi/0QjF6A3Zwkk/maxresdefault.jpg",
	"https://i.ytimg.com/vi/XuTwtOo88r8/maxresdefault.jpg",
	"https://i.ytimg.com/vi/MA3dJQU4J2M/maxresdefault.jpg",
	"https://animal-dream.com/data_images/money/money5.jpg"
];
var currentIndex = 0;

function renderImage() {
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}

function renderImage() {
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}

renderImage();

$('#forwardBtn').on('click', function(){
	//this is what happens when it's clicked!
	currentIndex++;
	renderImage();
});

$('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();
});

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + 
"!";
$("h1").html(outputString);

var myAudio = new Audio("jingleBells.mp3");
myAudio.play();


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

// Create the data table.
var data = new google.visualization.DataTable();
data.addColumn('string', 'Person');
data.addColumn('number', 'Jordan Love');
data.addRows([
  ['Tex and Rox', 36],
  ['Brandon', 10],
  ['Jordan', 42],
  ['Mum', 30],
  ['Dad', 30]
]);

var chartWidth = $(window).width()*0.35;

// Set chart options
var options = {
	'title':'Who loves Jordan the Most',
    'width':chartWidth,
    'height':300,
    'backgroundColor': '#C19469',
    'colors': ['#731509'],
    'fontName': 'Love Ya Like A Sister',
};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
chart.draw(data, options);
}




