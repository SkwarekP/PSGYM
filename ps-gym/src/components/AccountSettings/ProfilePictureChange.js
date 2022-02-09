import classes from "./ProfilePictureChange.module.css"
import person from "../../Assets/images/sidebarImg.jpg"

function ProfilePictureChange() {

    return (
        <>
            <p className={classes.sidebarProfileImg}>
                <img
                    alt="alt"
                    src={person}
                />
            </p>
            <label className={classes.sidebarProfileImg}>
                <input
                    className="text-center"
                    style={{color: "black",}}
                    type="file"
                />
            </label>
        </>
    )
}

export default ProfilePictureChange;