import * as React from "react"; 
import '../styles/custom-classes.css'
import '../styles/styles.css'
import $ from 'jquery'
import useSearch from '../functions/useSearch'
var { daos } = require('../data/daos.js'); 
export default function Search() {
  var data = [  
   {  
      "id":"1",
      "employee_name":"Tiger Nixon",
      "employee_salary":"320800",
      "employee_age":"61",
      "profile_image":"default_profile.png"
   },
   {  
      "id":"2",
      "employee_name":"Garrett Winters",
      "employee_salary":"434343",
      "employee_age":"63",
      "profile_image":"default_profile.png"
   },
   {  
      "id":"3",
      "employee_name":"Ashton Cox",
      "employee_salary":"86000",
      "employee_age":"66",
      "profile_image":"default_profile.png"
   },
   {  
      "id":"4",
      "employee_name":"Cedric Kelly",
      "employee_salary":"433060",
      "employee_age":"22",
      "profile_image":"default_profile.png"
   }
];
  return (
    <>
    <div class="container" style={{"padding": `${50}}px ${250}px`}}>
      <form role="form">
            <div class="form-group">
              <input type="input" class="form-control input-lg" id="txt-search" placeholder="Type your search character"/>
            </div>
      </form>
      <h1>hi</h1>
      <div id="filter-records">
      </div>
    </div>
    {
      $('#txt-search').keyup(function(){
            var searchField = $(this).val();
			if(searchField === '')  {
				$('#filter-records').html('');
				return;
			}
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
			  $.each(data, function(key, val){
				if ((val.employee_salary.search(regex) != -1) || (val.employee_name.search(regex) != -1)) {
				  output += '<div class="col-md-6 well">';
				  output += '<div class="col-md-3"><img class="img-responsive" src="'+val.profile_image+'" alt="'+ val.employee_name +'" /></div>';
				  output += '<div class="col-md-7">';
				  output += '<h5>' + val.employee_name + '</h5>';
				  output += '<p>' + val.employee_salary + '</p>'
				  output += '</div>';
				  output += '</div>';
				  if(count%2 == 0){
					output += '</div><div class="row">'
				  }
				  count++;
				}
			  });
			  output += '</div>';
			  $('#filter-records').html(output);
        })
    }
    </>
  );
}
//primarygoal, website, howMember, howFunded, howVote, howToken, techStack, otherInterests