// src/views/LoadingView.js
import './LoadingView.scss';

function LoadingView(props){
    const { size, percentage } = props;
    const sizeClass = (size === "xs") ? "loading-view-xs" : (
        (size === "sm") ? "loading-view-sm" : (
        (size === "md") ? "loading-view-md" : (
        "loading-view-lg" // size === "lg" (default)
    )));
    return (
        <div className={"loading-view " + sizeClass}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                {(percentage !== null && typeof percentage !== 'undefined') && (<p className="loading-percentage">{percentage+"%"}</p>)}
            </div>
        </div>
  );
}

export default LoadingView;