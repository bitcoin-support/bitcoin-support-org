import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Beginner',
    Svg: require('../../static/img/undraw_explore.svg').default,
    description: (
      <>
        Are you new to Bitcoin? We can help you with any questions you have. Make an appointment and ask us.
      </>
    ),
  },
  {
    title: 'Topics',
    Svg: require('../../static/img/undraw_questions.svg').default,
    description: (
      <>
        We will help you with all topics related to Bitcoin. Hardware Wallets, Software Wallets, the Blockchain, Nodes, Mining, ... For questions regarding taxes and investment, we can not give any advice.
      </>
    ),
  },
  {
    title: 'Complex questions',
    Svg: require('../../static/img/undraw_bitcoin.svg').default,
    description: (
      <>
        If you are not sure if we can help you, just send us an email and we will get back to you. If you have booked an appointment and we can't help you, your money will be refunded.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
