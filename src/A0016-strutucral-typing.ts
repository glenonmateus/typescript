type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
	return (
		user.username === sentValue.username && user.password === sentValue.password
	);
};

const bdUser: User = { username: "glenon", password: "1234" };
const sentUser: User = { username: "glenon", password: "1234" };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
