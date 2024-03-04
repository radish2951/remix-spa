import styles from "~/styles/comment.module.css";

export function Comment({ children, character }: { children: React.ReactNode, character?: string }) {
  return (
    <div className={styles["character-comment"]}>
      <div className={styles["character"]}>
        <img src="https://daiki.pink/assets/images/tetra_face_haruka.png" alt={character} />
        <div className={styles["character-name"]}>{character}</div>
      </div>
      <div className={styles["character-text"]}>{children}</div>
    </div>
  );
};
