import { FaQuestion } from 'react-icons/fa';
import styles from './accordion.module.css';
import { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.container} ${open ? styles.active : null}`}>
      <div className={styles.question} onClick={() => setOpen(!open)}>
        <div>
          <i>
            <FaQuestion />
          </i>
          {question}
        </div>
      </div>

      <div className={styles.answer}>{answer}</div>
    </div>
  );
};

export default Accordion;
