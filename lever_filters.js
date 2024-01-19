 $(document).ready(function () {
    var url = 'https://api.lever.co/v0/postings/Zowie?mode=json';
    var jobList; // Declare jobList at a scope accessible to filterJobs

    $.ajax({
      dataType: "json",
      url: url,
      success: function (data) {
        createJobs(data);
      }
    });

function createJobs(data) {
    var locations = new Set();
    var teams = new Set();

    // Sort data by team and then by title
    data.sort(function(a, b) {
        if (a.categories.team === b.categories.team) {
            return a.text.localeCompare(b.text); // Alphabetical sort if the team is the same
        }
        return a.categories.team.localeCompare(b.categories.team); // Sort by team
    });

    var currentTeam = "";

    data.forEach(function(posting) {

if (posting.id === "4bfd39f8-a6de-42a2-9e77-31854af1933a") {
            return; // Continue to the next iteration
        }

        var team = posting.categories.team;
        var title = posting.text;
        var location = posting.categories.location;
        var commitment = posting.categories.commitment;
        var link = posting.hostedUrl;

        locations.add(location);
        teams.add(team);

  if (currentTeam !== team) {
            currentTeam = team;
            $('#jobs-list').append('<h3 class="team-heading" data-team="' + team + '">' + team + '</h3>');
        }

      $('#jobs-list').append(
        $('<li>').attr({
          'data-location': location,
          'data-team': team,
            'class': 'job-posting'

        }).append(
'<div class="open-item-c">' +
              '<div style="background-color: rgb(252, 76, 2); opacity: 0;" class="open-item-bg-w"></div>' +
              '<div class="flexbox justify-space-between align-center gap-20 wrapped">' +
                '<div style="color: rgb(51, 51, 51);" class="z-index-2">' +
                  '<div>' +
                    '<div>' +
                      '<h2 class="text-size-30">' + title + '</h2>' +
                    '</div>' +
                    '<div class="margin-box top-16">' +
                      '<div class="flexbox gap-20 align-center mobile-vertical align-start mobile-10">' +
                        '<div class="flexbox gap-10">' +
                          '<div class="w-embed">' + 
       '<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
'<path fill-rule="evenodd" clip-rule="evenodd" d="M21.12 5.76171V15.8123C21.12 16.5181 20.5665 17.0903 19.8838 17.0903L2.11619 17.0903C1.43346 17.0903 0.879998 16.5181 0.879999 15.8123L0.879999 5.76171C0.879999 5.0559 1.43346 4.48373 2.11619 4.48373L19.8838 4.48373C20.5665 4.48373 21.12 5.0559 21.12 5.76171ZM22 5.76171C22 4.55346 21.0525 3.57398 19.8838 3.57398L2.11619 3.57397C0.947449 3.57397 0 4.55346 0 5.76171V15.8123C0 17.0205 0.947449 18 2.11619 18L19.8838 18C21.0525 18 22 17.0205 22 15.8123V5.76171ZM20.2068 4.4159C20.1033 4.38944 19.9951 4.3754 19.8837 4.3754L2.11609 4.3754C1.3755 4.3754 0.775135 4.99606 0.775135 5.76168L0.775134 15.8123C0.775134 16.4344 1.17152 16.9608 1.71743 17.1363C1.17157 16.9607 0.775236 16.4344 0.775236 15.8123L0.775237 5.76171C0.775237 4.99608 1.3756 4.37542 2.11619 4.37542L19.8838 4.37542C19.9952 4.37542 20.1034 4.38946 20.2068 4.4159ZM20.3714 3.74378C21.2466 3.96911 21.8951 4.7871 21.8951 5.76168V15.8123C21.8951 16.9607 20.9946 17.8917 19.8837 17.8917L2.11609 17.8917C1.98811 17.8917 1.86292 17.8793 1.74158 17.8557C1.86295 17.8794 1.98817 17.8917 2.11619 17.8917L19.8838 17.8917C20.9947 17.8917 21.8952 16.9607 21.8952 15.8123L21.8952 5.76171C21.8952 4.78709 21.2467 3.96907 20.3714 3.74378Z" fill="currentColor"> </path>' +
'<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2477 0.812278H7.43813C7.00419 0.812278 6.65241 1.17595 6.65241 1.62456V3.51987H15.0334V1.62456C15.0334 1.17595 14.6816 0.812278 14.2477 0.812278ZM7.43813 0C6.57025 0 5.8667 0.727338 5.8667 1.62456V4.33215H15.8191V1.62456C15.8191 0.727338 15.1155 0 14.2477 0H7.43813Z" fill="currentColor"></path>' +
'<path fill-rule="evenodd" clip-rule="evenodd" d="M3.77197 8.14973C3.77197 7.92543 3.94786 7.74359 4.16483 7.74359H18.0458C18.2628 7.74359 18.4386 7.92543 18.4386 8.14973C18.4386 8.37403 18.2628 8.55587 18.0458 8.55587H4.16483C3.94786 8.55587 3.77197 8.37403 3.77197 8.14973Z" fill="currentColor"></path>' +
'<path fill-rule="evenodd" clip-rule="evenodd" d="M3.77197 10.8573C3.77197 10.633 3.94786 10.4512 4.16483 10.4512H18.0458C18.2628 10.4512 18.4386 10.633 18.4386 10.8573C18.4386 11.0816 18.2628 11.2634 18.0458 11.2634H4.16483C3.94786 11.2634 3.77197 11.0816 3.77197 10.8573Z" fill="currentColor"></path>'+
'<path fill-rule="evenodd" clip-rule="evenodd" d="M3.77197 13.565C3.77197 13.3406 3.94786 13.1588 4.16483 13.1588H18.0458C18.2628 13.1588 18.4386 13.3406 18.4386 13.565C18.4386 13.7893 18.2628 13.9711 18.0458 13.9711H4.16483C3.94786 13.9711 3.77197 13.7893 3.77197 13.565Z" fill="currentColor"></path>' +
'</svg>' +                          '</div>' +
                          '<div class="open-item-bot-text-b"><div>' + team + '</div></div>' +
                        '</div>' +
                        '<div class="flexbox gap-10">' +
                          '<div class="w-embed">' +
'<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
'<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 8.33333C5.603 8.33333 4.875 7.58667 4.875 6.66667C4.875 5.74667 5.603 5 6.5 5C7.397 5 8.125 5.74667 8.125 6.66667C8.125 7.58667 7.397 8.33333 6.5 8.33333ZM6.5 4.16667C5.15369 4.16667 4.0625 5.28583 4.0625 6.66667C4.0625 8.0475 5.15369 9.16667 6.5 9.16667C7.84631 9.16667 8.9375 8.0475 8.9375 6.66667C8.9375 5.28583 7.84631 4.16667 6.5 4.16667ZM0.8125 6.335C0.8125 3.40417 3.47019 0.833333 6.5 0.833333C9.52981 0.833333 12.1875 3.40417 12.1875 6.335C12.1875 9.21417 10.1051 12.6208 6.5 18.4408C2.85269 12.5467 0.8125 9.21417 0.8125 6.335ZM6.5 0C3.08912 0 0 2.83583 0 6.335C0 9.83333 2.81856 14.01 6.5 20C10.1814 14.01 13 9.83333 13 6.335C13 2.83583 9.91169 0 6.5 0Z" fill="currentColor"></path>' +
'</svg>'                    +             '</div>' +
                          '<div class="open-item-bot-text-b"><div>' + location + '</div></div>' +
                        '</div>' +
                        '<div class="flexbox gap-10">' +
   
                          '<div class="open-item-bot-text-b"><div class="open-item-bot-text-e">' + commitment + '</div></div>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                 '<div style="color: rgb(51, 51, 51);" class="z-index-2">' +
                    '<a href="' + link + '" style="border-color: rgb(51, 51, 51);" class="outline-button-hir w-button">Read More</a>' +
                  '</div>' +
              '</div>' +
            '</div>'        )
      );
    });
     locations.forEach(function(location) {
        $('#location-checkboxes').append(
          $('<label>').append(
            $('<input>').attr({ type: 'checkbox', class: 'location-checkbox', value: location }),
            location
          )
        );
      });

      teams.forEach(function(team) {
        $('#team-checkboxes').append(
          $('<label>').append(
            $('<input>').attr({ type: 'checkbox', class: 'team-checkbox', value: team }),
            team
          )
        );
      });

      jobList = new List('jobs-container', {
        valueNames: ['text-size-30', { data: ['location'] }, { data: ['team'] }],
        listClass: 'list'
      });

      $('.location-checkbox, .team-checkbox').change(function () {
        filterJobs();
      });
    }
function filterJobs() {
    var selectedLocations = $('.location-checkbox:checked').map(function () {
        return this.value;
    }).get();

    var selectedTeams = $('.team-checkbox:checked').map(function () {
        return this.value;
    }).get();

    // Hide all job postings and team headings initially
    $('.job-posting, .team-heading').hide();

    // Variable to track if any job postings are visible
    var anyVisible = false;

    // Iterate through each job posting
    $('.job-posting').each(function() {
        var jobLocation = $(this).attr('data-location');
        var jobTeam = $(this).attr('data-team');

        // Check if the job posting matches any of the selected locations and teams
        var locationMatch = selectedLocations.length === 0 || selectedLocations.includes(jobLocation);
        var teamMatch = selectedTeams.length === 0 || selectedTeams.includes(jobTeam);

        if (locationMatch && teamMatch) {
            $(this).show(); // Show this job posting
            $('h3.team-heading[data-team="' + jobTeam + '"]').show(); // Show the corresponding team heading
            anyVisible = true;
        }
    });

    // Handle no results
    if (!anyVisible) {
        $('#lever-no-results').show();
    } else {
        $('#lever-no-results').hide();
    }
}

$('#lever-clear-filters').click(function() {
    // Uncheck all checkboxes for locations and teams
    $('.location-checkbox, .team-checkbox').prop('checked', false);

    // Call the filter function to update the job listings
    filterJobs();
});

    $('input[value="Warsaw / Krakow / Remote"]').parent('label').addClass('hide');


   $('#jobs-container').on('mouseenter', '.open-item-c', function() {
        $(this).find('.open-item-bg-w').css('opacity', '1');
        $(this).find('.z-index-2').css('color', 'rgb(252, 250, 248)');
        $(this).find('.outline-button-hir').css('border-color', 'rgb(252, 250, 248)');
    }).on('mouseleave', '.open-item-c', function() {

        $(this).find('.open-item-bg-w').css('opacity', '0');
        $(this).find('.z-index-2').css('color', '');
        $(this).find('.outline-button-hir').css('border-color', '');
    });
  });
