import React from 'react';
import Main from 'components/Main';
import { galleries } from 'data/siteConfig';
import ContactCard from 'components/ContactCard';

const Contact = () => (
	<div>
		<Main heading="Contact">
			<div className="row">
				<div className="col-12 col-sm-10 col-md-8 col-lg-6">
					<ContactCard
						{...{
							title: 'Rob Bateman',
							extra:
								"You are welcome to direct all correspondence and purchase enquiries to the executor of the estate, Rob Bateman (Annette's brother) ",
							email: 'booma46@live.com.au',
							phone: 'm: 0424 084 101',
						}}
					/>
				</div>
			</div>
		</Main>
		<Main heading="Galleries">
			<div className="row">
				{galleries &&
					galleries.map((gallery, i) => (
						<div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
							<ContactCard key={i} {...gallery} />
						</div>
					))}
			</div>
		</Main>
	</div>
);

export default Contact;
