const getUserIdFromDB = () => 'mitnaeem';
const getUserNameFromDB = () => 'Mohammad';
const getUserAddressFromDB = () => 'New Delhi, India';


async function* mixedFunction(getUserIdFromDB, getUserNameFromDB, getUserAddressFromDB) {
    const userId = await getUserIdFromDB();
    yield userId;

    const userName = await getUserNameFromDB();
    yield userName;

    const userAddress = await getUserAddressFromDB();
    yield userAddress;
}


const iteration = mixedFunction(getUserIdFromDB, getUserNameFromDB, getUserAddressFromDB);
iteration.next().then((value) => console.log(value));
iteration.next().then((value) => console.log(value));
iteration.next().then((value) => console.log(value));
