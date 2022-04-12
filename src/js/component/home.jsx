import React from "react";
import Navbar from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";

//create your first component
const randomArray = [
	{
		title: "A goal in life",
		text: "One of my biggest goals in life is to become a breeder for discus fish. Easily one of the most beautiful fish in the hobby. This is an example of one of the color variations you can get.",
		image: "https://media.istockphoto.com/photos/discus-fish-snaks-skin-picture-id469789288",
	},
	{
		title: "My Family",
		text: "My family is the most important thing to me. I would not be where I am today without my beautiful wife and beautiful children.",
		image: "https://scontent.fslc3-2.fna.fbcdn.net/v/t39.30808-6/273042869_7763827853642888_1555920311250865744_n.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-5&_nc_sid=da31f3&_nc_ohc=n4RY7Jjl2tUAX8pTuaU&_nc_ht=scontent.fslc3-2.fna&oh=00_AT_-ESXgc2gwZzrXJ0Nyyf1o07y4w39BQMVy6x7eG2QlZw&oe=625A90BC",
	},
	{
		title: "BASEBALL",
		text: "Baseball is America's pasttime, and my favorite sport to play.",
		image: "https://scontent.fslc3-2.fna.fbcdn.net/v/t1.18169-9/10447519_10202957467836253_1174590221839880382_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=do_g0D6mEQUAX-3krQZ&_nc_ht=scontent.fslc3-2.fna&oh=00_AT-58C3r9zo6lKmsIYkBLs-fOpORMji4JAaKXwsHVeqWJw&oe=627BB072",
	},
	{
		title: "My beautiful wife",
		text: "Wouldn't be where I am today without this amazing woman. ",
		image: "https://scontent.fslc3-1.fna.fbcdn.net/v/t39.30808-6/261685049_7311013198924358_8266692432303337874_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=L6nDn4Jr_agAX9RkIxm&_nc_ht=scontent.fslc3-1.fna&oh=00_AT_0YSQN4auPQ5KWsJ8Qcg9fygT40pE0mDoQNLHj0QnHuw&oe=625A6A95",
	},
];
const Home = () => {
	return (
		<div className="body">
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
			<div className="container">
				<div className="row">
					{randomArray.map((element, index) => {
						return (
							<div className="col-3" key={index}>
								<Cards
									image={element.image}
									title={element.title}
									text={element.text}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default Home;
