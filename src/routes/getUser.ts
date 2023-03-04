
import { getDatabase, ref, set, onValue, Database } from "firebase/database";

const getUserToken = () => {
    const loggedUserJson = window.localStorage.getItem("logged In User Details")

    if (loggedUserJson) {
        const user = JSON.parse(loggedUserJson)
        return user
    }
    return null
}

const uploadUrlToRealTimeDatabase = (url: string, dataBase: Database) => {
    // const dataBase = getDatabase()

    set(ref(dataBase, 'Url'), {
        urlstring: url
    })
}


const getUrlFromRealTimeDatabase = (): Promise<string> => {
    return new Promise<string>(
        resolve => {
            const db = getDatabase();

            onValue(ref(db, ''), (snapshot) => {
                const data = snapshot.val();
            })
        }
    )
}

function delay(milliseconds: number): Promise<void> {
    return new Promise<void>(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

export { getUserToken }


