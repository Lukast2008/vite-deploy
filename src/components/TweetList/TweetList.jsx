import Button from "../Button/Button";
import styles from "../styles.module.css";
import sprite from "../../assets/image/Vector.svg";
import defaultAvatar from "../../assets/image/Hansel.png";

export default function TweetList({ tweets, filter, countFollowers }) {
  const filterTweet = tweets.filter((tweet) => {
    if (filter === "all") {
      return true;
    }
    return tweet.follow.toString() === filter;
  });

  const addComa = (data) => {
    return data.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <ul className={styles.listItem}>
        {filterTweet.map(({ user, avatar, followers, id, tweets, follow }) => (
          <li key={id} className={styles.card}>
            <div className={styles.image}>
              <svg width="76" height="22" className={styles.logo}>
                <use href={sprite + "#icon-Vector"}></use>
              </svg>
            </div>

            <div className={styles.Rectangle}>
              <div className={styles.circle}>
                <div className={styles.backAvatar}>
                  {avatar ? (
                    <img className={styles.avatar} width="62px" src={avatar} alt={user} />
                  ) : (
                    <img
                      className={styles.avatar}
                      src={defaultAvatar}
                      alt="user"
                    />
                  )}
                </div>
              </div>
              <div className={styles.follow}>
                <h2 className={styles.text}>
                  <span>{addComa(tweets)}</span> TWEETS
                </h2>
                <h2>
                  <span>{addComa(followers)}</span> FOLLOWERS
                </h2>
                <Button count={countFollowers} id={id} foll={follow} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
