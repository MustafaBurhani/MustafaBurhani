const loaderStyle = {
    width: '100px',
    height: '100px',
};

export default function Loader() {
    return <div className="loader w-100 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <img src="/loader.svg" alt="loader" style={loaderStyle} />
    </div>
}