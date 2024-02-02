const WorkoutDetails = ({ workout }) => {
  const capitalizedTitle =
    workout.title.charAt(0).toUpperCase() +
    workout.title.slice(1).toLowerCase();

  return (
    <div className='workout-details'>
      <h4>{capitalizedTitle}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>{' '}
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
