import React, { useState, useEffect } from 'react';

const HowWeWork = () => {
  const steps = [
    {
      title: 'Discovery',
      content: 'We dive deep into your brand, audience, and goals to uncover what truly matters.'
    },
    {
      title: 'Strategy',
      content: 'We map out a tailored approach blending creativity, content, and conversion techniques.'
    },
    {
      title: 'Execution',
      content: 'Our in-house team brings strategy to life — with strong visuals, storytelling, and performance-driven content.'
    },
    {
      title: 'Optimisation & Reporting',
      content: 'We continuously track, learn, and refine based on real-time performance insights.'
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {/* Main Heading */}
      <h1 style={styles.title}>HOW WE WORK</h1>

      {/* Subheading */}
      <h3 style={styles.subheading}>Our 4-Step Process</h3>
      <p style={styles.description}>We combine structure with storytelling, and strategy with soul.</p>

      {/* Progress Bar */}
      <div style={styles.progressContainer}>
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.star,
              left: `${(activeStep / (steps.length - 1)) * 100}%`
            }}
          >
            <span style={styles.starIcon}>⭐</span>
          </div>
        </div>
      </div>

      {/* Step Blocks */}
      <div style={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              ...styles.step,
              opacity: activeStep === index ? 1 : 0.3,
              transform: activeStep === index ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            <h4 style={styles.stepTitle}>{step.title}</h4>
            <p style={styles.stepContent}>{step.content}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        Collaboration is at our core. We work with you — <strong>not just for you.</strong>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '80px 60px',
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
    height: '100%',
    width: '100%'
  },
  title: {
    fontSize: '72px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #ffffff, #ffd700)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',
    letterSpacing: '2px'
  },
  subheading: {
    color: '#a58af6',
    margin: '0',
    fontSize: '24px',
    fontWeight: '600'
  },
  description: {
    fontSize: '20px',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px',
    fontWeight: '500'
  },
  progressContainer: {
    position: 'relative',
    height: '100px',
    marginBottom: '30px' // ⬅️ Reduced spacing here
  },
  progressBar: {
    position: 'relative',
    height: '20px',
    backgroundColor: '#fff',
    borderRadius: '30px',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  star: {
    position: 'absolute',
    top: '-50px',
    transform: 'translateX(-50%)',
    transition: 'left 1s ease-in-out'
  },
  starIcon: {
    fontSize: '70px',
    color: '#ffff66',
    textShadow: '0 0 12px #ffff99, 0 0 20px #fff000'
  },
  stepsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto 60px'
  },
  step: {
    width: '22%',
    transition: 'transform 0.5s, opacity 0.5s',
    padding: '20px'
  },
  stepTitle: {
    color: '#a58af6',
    fontSize: '26px',
    marginBottom: '12px',
    fontWeight: '700'
  },
  stepContent: {
    fontSize: '20px',
    lineHeight: '1.6',
    fontWeight: '600',
    color: '#ddd'
  },
  footer: {
    color: '#ffc72c',
    fontWeight: '700',
    fontSize: '26px',
    marginTop: '60px'
  }
};

export default HowWeWork;
