import PropTypes from 'prop-types';
import './Statistical.css';

function randomColor() {
  let col = Math.round(255.0 * Math.random());
  let r = col.toString(16);
  col = Math.round(255.0 * Math.random());
  let g = col.toString(16);
  col = Math.round(255.0 * Math.random());
  let d = col.toString(16);
  col = r + g + d;
  return col;
}

const Statistical = ({ title, stats }) => {
  // const titleName = title ? <h2 className="title">{title}</h2> : null;
  return (
    <section className="statistics">
      <div className="statistics-container">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <li
              className="stat-list__item"
              key={id}
              style={{ backgroundColor: `#${randomColor()}` }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
Statistical.defaultProps = {
  title: '',
};
Statistical.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistical;
