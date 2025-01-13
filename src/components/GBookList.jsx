import GBookCard from "./GBookCard";

function GBooklist() {

	return (
		<div className="container text-center align-items-center">
			<p className='display-6 my-3'> Loading </p>
			<div className="row my-4">
				<div className="col">
					<GBookCard/>
				</div>
				<div className="col">
					<GBookCard/>
				</div>
				<div className="col">
					<GBookCard/>
				</div>
			</div>
			<div className="row my-4">
				<div className="col">
					<GBookCard/>
				</div>
				<div className="col">
					<GBookCard/>
				</div>
				<div className="col">
					<GBookCard/>
				</div>
			</div>
		</div>
	)

}

export default GBooklist;