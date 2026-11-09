const MASCOT_GIF = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDVqb29mMWJob2Fpa201OG90OW5pMWt3M2FtNW9nb29kdW5rbHRraSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XEOUMqltCrGdCnatFF/giphy.gif"

export default function Mascot() {
    return (
        <img
            className="mascot"
            src={MASCOT_GIF}
            alt=""
            width="480"
            height="480"
            referrerPolicy="no-referrer"
        />
    )
}
