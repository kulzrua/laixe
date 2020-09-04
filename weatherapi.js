var today = new Date();var weekDay = '';
switch (today.getDay()){case 0:weekDay = 'Chủ nhật';break;case 1:weekDay = 'Thứ hai';break;case 2:weekDay = 'Thứ ba';break;case 3:weekDay = 'Thứ tư';break;case 4:weekDay = 'Thứ năm';break;case 5: weekDay = 'Thứ sáu';break;case 6:weekDay = 'Thứ bảy';break;}
var date = weekDay + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(160) + today.getDate() + '-'+ (today.getMonth() + 1) + '-' + today.getFullYear();var bgColor = '#00000c';var hour = today.getHours();
var sunbot='10%'; var sunleft = '10%';var sundis = 'block';
switch (hour) {// set bg color and sun's position depend on time
    case 1:bgColor='linear-gradient(to bottom, #020111 85%,#191621 100%)';sundis='none';break;
    case 2:bgColor='linear-gradient(to bottom, #020111 60%,#20202c 100%)';sundis='none';break;
    case 3:bgColor='linear-gradient(to bottom, #020111 10%,#3a3a52 100%)';sundis='none';break;
    case 4:bgColor='linear-gradient(to bottom, #20202c 0%, #515175 100%)';sundis='none';break;
    case 5:bgColor='linear-gradient(to bottom, #40405c 0%, #6f71aa 80%, #8a76ab 100%)';break;
    case 6:sunbot='15%';sunleft='5%';bgColor='linear-gradient(to bottom, #4a4969 0%, #7072ab 50%, #cd82a0 100%)';break;
    case 7:sunbot='25%';sunleft='11%';bgColor='linear-gradient(to bottom, #757abf 0%, #8583be 60%, #eab0d1 100%)';break;
    case 8:sunbot='35%';sunleft='18%';bgColor='linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%)';break;
    case 9:sunbot='45%';sunleft='24%';bgColor='linear-gradient(to bottom, #94c5f8 1%, #a6e6ff 70%, #b1b5ea 100%)';break;
    case 10:sunbot='55%';sunleft='30%';bgColor='linear-gradient(to bottom, #b7eaff 0%, #94dfff 100%)';break;
    case 11:sunbot='67%';sunleft='37%';bgColor='linear-gradient(to bottom, #9be2fe 0%, #67d1fb 100%)';break;
    case 12:sunbot='80%';sunleft='45%';bgColor='linear-gradient(to bottom, #90dffe 0%, #38a3d1 100%)';break;
    case 13:sunbot='67%';sunleft='53%';bgColor='linear-gradient(to bottom, #57c1eb 0%, #246fa8 100%)';break;
    case 14:sunbot='55%';sunleft='60%';bgColor='linear-gradient(to bottom, #2d91c2 0%, #1e528e 100%)';break;
    case 15:sunbot='45%';sunleft='66%';bgColor='linear-gradient(to bottom, #2473ab 0%, #1e528e 70%, #5b7983 100%)';break;
    case 16:sunbot='35%';sunleft='72%';bgColor='linear-gradient(to bottom, #1e528e 0%, #265889 50%, #9da671 100%)';break;
    case 17:sunbot='25%';sunleft='80%';bgColor='linear-gradient(to bottom, #1e528e 0%, #728a7c 50%, #e9ce5d 100%)';break;
    case 18:sunbot='15%';sunleft='86%';bgColor='linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)';break;
    case 19:bgColor='linear-gradient(to bottom, #163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%)';sundis='none';break;
    case 20:bgColor='linear-gradient(to bottom, #071B26 0%,#071B26 30%,#8A3B12 80%,#240E03 100%)';sundis='none';break;
    case 21:bgColor='linear-gradient(to bottom, #010A10 30%,#59230B 80%,#2F1107 100%)';sundis='none';break;    
    case 22:bgColor='linear-gradient(to bottom, #090401 50%,#4B1D06 100%)';sundis='none';break;
    case 23:bgColor='linear-gradient(to bottom, #00000c 80%,#150800 100%)';sundis='none';break;
    case 24:bgColor='#00000c';sundis='none';break;
}
var time = hour + ':' + today.getMinutes();
// Fill current date time
$('.date').text(date);$('.time').text(time);
if (hour > 5 && hour <= 14) {
} else if (hour <= 16) {
    $('.weather').css('left', '10%');
} else if (hour <= 17) {
    $('.weather').css('left', '10%');
} else if (today.getHours() >= 18 || today.getHours() <= 5) {
    $('.date').css('color', '#e6dde4');
    $('.time').css('color', '#e6dde4');
}
$(".sun").css({'bottom': sunbot,"left":sunleft, "display": sundis});$('.container1').css('background', bgColor);
$(document).ready(function() {
    function reformatDate(dateStr){dArr = dateStr.split("-");return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0];}
     function fillWeather(lcity){
        $.ajax({
            type: 'GET',
            dataType: 'json',
            data: {},
            url: 'https://api.weatherapi.com/v1/forecast.json?key=2b992667354644fa90f70229202408&q='+ lcity+'&days=3&lang=vi',
            success: function(data)
            {
             console.log(data);			
              var day1 = data.forecast.forecastday[0];var day2 = data.forecast.forecastday[1];var day3 = data.forecast.forecastday[2];
              var code = '<table class="table table-striped table-bordered text-center">';
              code+='<thead class="thead-dark"><tr><th  class="text-center" scope="col">Ngày</th>'+ 
                '<th class="text-center" scope="col">'+ reformatDate(day1.date)+'</th><th class="text-center" scope="col">'+ reformatDate(day2.date)+'</th><th class="text-center" scope="col">'+ reformatDate(day3.date)+'</th>'
                +'</tr></thead>'
              code+="<tbody>";
              code+="<tr><td></td><td><img class='ori' src='"+ day1.day.condition.icon +"'/></td><td><img class='ori' src='"+ day2.day.condition.icon +"'/></td><td><img class='ori' src='"+ day3.day.condition.icon +"'/></td></tr>";
              code+="<tr><td>Khả năng</td><td>"+ day1.day.condition.text +"</td><td>"+ day2.day.condition.text +"</td><td>"+ day3.day.condition.text +"</td></tr>";
              code+="<tr><td>Nhiệt độ cao nhất</td><td>"+ day1.day.maxtemp_c +" °C</td><td>"+ day2.day.maxtemp_c +" °C</td><td>"+ day3.day.maxtemp_c +" °C</td></tr>";
              code+="<tr><td>Nhiệt độ thấp nhất</td><td>"+ day1.day.mintemp_c +" °C</td><td>"+ day2.day.mintemp_c +" °C</td><td>"+ day3.day.mintemp_c +" °C</td></tr>";
              code+="<tr><td>Nhiệt độ trung bình</td><td>"+ day1.day.avgtemp_c +" °C</td><td>"+ day2.day.avgtemp_c +" °C</td><td>"+ day3.day.avgtemp_c +" °C</td></tr>";
              code+="<tr><td>Độ ẩm</td><td>"+ day1.day.avghumidity +"%</td><td>"+ day2.day.avghumidity +"%</td><td>"+ day3.day.avghumidity +"%</td></tr>";
	      code+="<tr><td>Tổng lượng mưa</td><td>"+ day1.day.totalprecip_mm +" mm</td><td>"+ day2.day.totalprecip_mm +" mm</td><td>"+ day3.day.totalprecip_mm +" mm</td></tr>";
              code+="<tr><td>Tốc độ gió</td><td>"+ day1.day.maxwind_kph +" km/h</td><td>"+ day2.day.maxwind_kph +" km/h</td><td>"+ day3.day.maxwind_kph +" km/h</td></tr>";
              code+="<tr><td>UV</td><td>"+ day1.day.uv +"</td><td>"+ day2.day.uv +"</td><td>"+ day3.day.uv +"</td></tr>";
              code+="<tr><td>Mặt trời mọc</td><td>"+ day1.astro.sunrise +"</td><td>"+ day2.astro.sunrise +"</td><td>"+ day3.astro.sunrise +"</td></tr>";
              code+="<tr><td>Mặt trời lặn</td><td>"+ day1.astro.sunset +"</td><td>"+ day2.astro.sunset +"</td><td>"+ day3.astro.sunset +"</td></tr>";
              code+="</tbody>";
              code += '</table>';
              $("#forecastday").html(code);
              if($('.weather .city').html()==""){$('.weather .city').html(lcity)}
              $('.weather .curr-temp span').html(data.current.temp_c);
              $('.weather .description').html(data.current.condition.text);
              $('.weather .feel').html(data.current.feelslike_c + " °C");
              $('.weather .max').html(day1.day.maxtemp_c + " °C");
              $('.weather .min').html(day1.day.mintemp_c + " °C");
              $('.weather .icon').html("<img class='ori' src='"+data.current.condition.icon.replace("64x64","128x128") +"' alt='"+data.current.condition.text +"'>");
	console.log("lat:" + data.location.lat + " | lon:" + data.location.lon);
            }
        });
    }
fillWeather(localcity);
$(".khuvuc ul li").on("click",function(i){
	var t=$(this).attr("tenlocal");
	var l=$(this).attr("lcity");fillWeather(l);
	$('.weather .city').html(t);
	$("#addtitle1").html("Dự báo thời tiết " + t);
	$("html,body").animate({scrollTop:$("#addtitle1").offset().top-100},"slow");
});

});
