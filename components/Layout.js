

export default function Layout({children}) {
    return (
    <>
    <div className="container">{children}</div>
    <style jsx>
    {`
        .container {
            width:80%;
            margin:20px auto;
        }
    `}
        </style>
    </>
    );
}
