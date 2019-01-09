import React from 'react';
import Main from 'components/Main';
import config from 'data/siteConfig';
import ContactCard from 'components/ContactCard';

const Contact = () => {
	const galleries = config.galleries;
	return (
		<Main heading="Galleries">
			<div className="row">
				{galleries
					&& galleries.map((gallery, i) => (
						<div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
							<ContactCard key={i} {...gallery} />
						</div>
					))}
			</div>
		</Main>
	);
};

export default Contact;
