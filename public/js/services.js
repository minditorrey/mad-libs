'use strict';

var app = angular.module('madlibsApp');

app.service('Stories', function() {


});

app.factory('ThemesFactory', function(){
	var themes = [
	{'name': 'The Walking Dead',
	'description': 'A truly mad lib replete with blood, zombies, and your favorite Dead characters.',
	'image': 'http://img02.deviantart.net/6818/i/2014/040/3/9/the_walking_dead_by_ercansebat-d75qd7v.jpg'
	}, {'name': 'Breaking Bad',
	'description': 'Walter and Jesse will help you cook up a clean batch of mad libs.',
	'image': 'http://cdn2.thegloss.com/wp-content/uploads/2013/09/meth-breaking-bad-bryan-cranston-large.jpg'
	}, {'name': "Bob's Burgers", 
	'description': "Don't have a crap attack. The Belchers will help you mad lib.",
	'image': 'https://i.ytimg.com/vi/_aSrQRcqBYY/hqdefault.jpg'
	}, {'name': "Empire",
	'description': "The streets ain't made for everybody. That's why we made mad libs.",
	'image': "https://www.cbs.com/thumbnails/videos/w640/CBS_Production_Entertainment_VMS/2013/11/20/67244611956/ent_poi_epk_112013_640x360.jpg"
	}, {'name': "Game of Thrones",
	'description': "Winter is coming. Mad lib while you still can.",
	'image': "http://s.newsweek.com/sites/www.newsweek.com/files/styles/embed-lg/public/2016/02/12/data-broadband-download-record-game-thrones.jpg"
	}]

	var themesObject = {
		getAll: function() {
			return themes;
		}
	}
	return themesObject;
})