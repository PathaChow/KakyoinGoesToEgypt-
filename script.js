script = {
	start: new Ln(['It\'s sudden but We\'re in Egypt. What do we do'],['choice_1'],'person'),
	choice_1: new Ch(['Sleep','Eat','Go exlore the pyramids'],['go_sleep','go_eat','go_pyramid'],'person'),
	go_sleep: new Ln(['It\'s too hot outside, you got heat stroke and died'], ['go_sleep'],'kakd'),
	go_eat: new Ln(['It\'s too hot outside. Your food went bad. You\'re food poisoned and died'],['go_eat'],'kakd'),
	go_pyramid: new Ln(['Good, now we are in the pyramid! You discovered wild-grown cherries. What do you do?'], ['in_pyramid'], 'person'),
	in_pyramid: new Ch(['eat them','ignore it','play it with your tongue'], ['eat_cherry','toss_cherry','rero_cherry'], 'cherry'),
	eat_cherry: new Ln(['It\'s stand attack! The cherry exploded in your mouth and your head got blown off'],['eat_cherry'],'kakd'),
	toss_cherry: new Ln(['It\'s stand attack! The cherry\'s a stand and its dignity got hurt because you ignored it. It exploded and you died.'],['toss_cherry'],['kakd']),
	rero_cherry: new Ln(['It\'s stand attack! The cherry likes being tickled and befriended you. You\'re now friend with a cherry! '],['rero_cherry'],'person')
}