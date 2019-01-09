import React from 'react';
import Main from 'components/Main';
import styled from 'styled-components';

const SectionHeading = styled.div`
	margin-bottom: 2rem;
`;

const Title = styled.h3``;

const Biography = () => (
		<Main heading="Biography">
			<div className="cv">
				<p>Born Adelaide, South Australia. Lives and works, Adelaide </p>
				<br />
				<SectionHeading>
					<Title>Education</Title>
				</SectionHeading>
				<table className="table">
					<tbody className="">
						<tr>
							<td className="duration">1974 - 1977</td>
							<td className="content">South Australian School of Art, Adelaide</td>
						</tr>
					</tbody>
				</table>
				<SectionHeading>
					<Title>Solo Exhibitions</Title>
				</SectionHeading>
				<table className="table">
					<tbody className="">
						<tr>
							<td className="duration">2018</td>
							<td className="content">Cocktail, Australian Galleries, Melbourne </td>
						</tr>
						<tr>
							<td className="duration">2016</td>
							<td className="content">Precious Luck, Hill Smith Galleries, Adelaide </td>
						</tr>
						<tr>
							<td className="duration">2015</td>
							<td className="content">Lifetimes in disguise, Australian Galleries, Melbourne </td>
						</tr>
						<tr>
							<td className="duration">2014</td>
							<td className="content">Inscrutable, Australian Galleries, Sydney </td>
						</tr>
						<tr>
							<td className="duration">2013</td>
							<td className="content">
								Survey show 1997 - 2013, Coffs Harbour Regional Gallery, NSW
							</td>
						</tr>
						<tr>
							<td className="duration">2012</td>
							<td className="content">Beautiful Ugly, Nellie Castan Gallery, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">2012</td>
							<td className="content">At first sight, Greenhill Galleries, Perth</td>
						</tr>
						<tr>
							<td className="duration">2011</td>
							<td className="content">Lookers, Harrison Galleries, Sydney</td>
						</tr>
						<tr>
							<td className="duration">2010</td>
							<td className="content">It's Complicated, Greenaway Art Gallery, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">2009</td>
							<td className="content">Speaking silences, Nellie Castan Gallery, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">2009</td>
							<td className="content">Silent Violent, Harrison Galleries, Sydney</td>
						</tr>
						<tr>
							<td className="duration">2008</td>
							<td className="content">Blush, Florence Lynch Gallery, New York</td>
						</tr>
						<tr>
							<td className="duration">2008</td>
							<td className="content">Annette Bezor, Harrison Galleries, Sydney</td>
						</tr>
						<tr>
							<td className="duration">2007</td>
							<td className="content">Annette Bezor, Turner Galleries, Perth</td>
						</tr>
						<tr>
							<td className="duration">2007</td>
							<td className="content">Annette Bezor, Florence Lynch Gallery, New York</td>
						</tr>
						<tr>
							<td className="duration">2007</td>
							<td className="content">Annette Bezor, Greenaway Art Gallery, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">2006</td>
							<td className="content">Mirror Face, Nellie Castan Gallery, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">2005</td>
							<td className="content">
								Flogging the rocking horse, Greenaway Art Gallery, Adelaide
							</td>
						</tr>
						<tr>
							<td className="duration">2004</td>
							<td className="content">If Looks could Kill, Brian Moore Gallery, Sydney</td>
						</tr>
						<tr>
							<td className="duration">2004</td>
							<td className="content">Witness, Nellie Castan Gallery, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">2003</td>
							<td className="content">Florence Lynch Gallery, New York</td>
						</tr>
						<tr>
							<td className="duration">2002</td>
							<td className="content">
								Cloning the ultimate appropriation, Greenaway Art Gallery, Adelaide
							</td>
						</tr>
						<tr>
							<td className="duration">2001</td>
							<td className="content">Blush, Institute of Modern Art, Brisbane</td>
						</tr>
						<tr>
							<td className="duration">1999</td>
							<td className="content">Greenaway Art Gallery, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">1997</td>
							<td className="content">'Builder of Bridges', Robert Lindsay Gallery, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">1997</td>
							<td className="content">'blind', Greenaway Art Gallery, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">1995</td>
							<td className="content">Robert Lindsay Gallery, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">1994</td>
							<td className="content">
								Adelaide Festival Exhibition, Greenaway Art Gallery, Adelaide
							</td>
						</tr>
						<tr>
							<td className="duration">1993</td>
							<td className="content">Luba Bilu Gallery 2, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">1992</td>
							<td className="content">Roslyn Oxley 9, Sydney</td>
						</tr>
						<tr>
							<td className="duration">1991</td>
							<td className="content">Annette Bezor</td>
						</tr>
						<tr>
							<td className="duration">1990</td>
							<td className="content">Recent Paintings, Luba Bilu Gallery</td>
						</tr>
						<tr>
							<td className="duration">1990</td>
							<td className="content">Idol Oratory, Roslyn Oxley 9, Sydney</td>
						</tr>
						<tr>
							<td className="duration">1989</td>
							<td className="content">Hocus Pocus, Luba Bilu Gallery, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">1988</td>
							<td className="content">
								Beyond the Veil, Roslyn Oxley 9 and Contemporary Art Centre, Adelaide
							</td>
						</tr>
						<tr>
							<td className="duration">1986</td>
							<td className="content">Fine Arts Gallery, University of Tasmania, Hobart</td>
						</tr>
						<tr>
							<td className="duration">1986</td>
							<td className="content">Roslyn Oxley 9, Sydney</td>
						</tr>
						<tr>
							<td className="duration">1986</td>
							<td className="content">Heads Above Water, S.A. School of Art Gallery, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">1983</td>
							<td className="content">Round Space Gallery, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">1980-1991</td>
							<td className="content">
								A Survey, Contemporary Art Centre, Adelaide and touring; Imago Ignota, Luba Bilu
								Gallery, Melbourne.
							</td>
						</tr>
					</tbody>
				</table>
				<SectionHeading>
					<Title>Group Exhibitions</Title>
				</SectionHeading>
				<table className="table ">
					<tbody className="">
						<tr>
							<td className="duration">2014</td>
							<td className="content">
								Australia Day Exhibition, Australian Galleries, Melbourne & Sydney
							</td>
						</tr>
						<tr>
							<td className="duration">2012</td>
							<td className="content">Melbourne Art Fair, Greenhill Galleries, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">2011</td>
							<td className="content">Wattle, The Cat St Gallery, Hong Kong</td>
						</tr>
						<tr>
							<td className="duration">2008</td>
							<td className="content">From Mao to Now, The Armoury, Sydney</td>
						</tr>
						<tr>
							<td className="duration">2008</td>
							<td className="content">Uneasy Samstag Gallery, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">2007</td>
							<td className="content">True portraits Adelaide Central Gallery</td>
						</tr>
						<tr>
							<td className="duration">2006</td>
							<td className="content">Snapshot Experimental Art Foundation, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">2006</td>
							<td className="content">Taipai Art Fair, Greenaway Gallery, Taipai, Taiwan</td>
						</tr>
						<tr>
							<td className="duration">2005</td>
							<td className="content">One to eight and Counting</td>
						</tr>
						<tr>
							<td className="duration">2005</td>
							<td className="content">Taipei Art Fair Greenaway gallery, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">2004</td>
							<td className="content">
								ARCO 2004 (International Art Fair), Greenaway Art Gallery, Madrid, Spain
							</td>
						</tr>
						<tr>
							<td className="duration">2004</td>
							<td className="content">
								Annette Bezor. Carolina Antich. Florence Lynch Gallery, New York
							</td>
						</tr>
						<tr>
							<td className="duration">2002</td>
							<td className="content">Erotica Metro 5 Gallery, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">2001</td>
							<td className="content">Orbit SA Museum Gallery, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">2000</td>
							<td className="content">Warm Filters Telstra Adelaide Festival of Arts, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">2000</td>
							<td className="content">New Thinking is Rare Country Arts SA Touring exhibition</td>
						</tr>
						<tr>
							<td className="duration">1998</td>
							<td className="content">
								ARCO 98 (International Art Fair), Greenaway Art Gallery, Madrid, Spain
							</td>
						</tr>
						<tr>
							<td className="duration">1998</td>
							<td className="content">
								Adelaide Festival Exhibition, Greenaway Art Gallery, Adelaide
							</td>
						</tr>
						<tr>
							<td className="duration">1997</td>
							<td className="content">Still life - Still lives Art Gallery of South Australia</td>
						</tr>
						<tr>
							<td className="duration">1996</td>
							<td className="content">
								ARCO 96 (International Art Fair) Greenaway Art Gallery, Madrid, Spain
							</td>
						</tr>
						<tr>
							<td className="duration">1994</td>
							<td className="content">
								John McCaughey Memorial Art Prize Exhibition, National Art Gallery of Victoria,
								Melbourne
							</td>
						</tr>
						<tr>
							<td className="duration">1992</td>
							<td className="content">Third Australian Contemporary Art Fair, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">1992</td>
							<td className="content">Autumn Salon Grand Palais, Paris, France</td>
						</tr>
						<tr>
							<td className="duration">1992</td>
							<td className="content">
								The Nude 1992 - Sara Weis Award, Heide Park and Art Gallery
							</td>
						</tr>
						<tr>
							<td className="duration">1992</td>
							<td className="content">Melbourne Review 1992 Luba Bilu Gallery, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">1991</td>
							<td className="content">The Intimate Experience Ivan Dougherty Gallery, Sydney</td>
						</tr>
						<tr>
							<td className="duration">1990</td>
							<td className="content">New Directions Vincent Gallery, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">1990</td>
							<td className="content">Art Dock, Noumea, New Caledonia</td>
						</tr>
						<tr>
							<td className="duration">1990</td>
							<td className="content">The Complex Picture College Gallery, S.A.CAE., Adelaide</td>
						</tr>
						<tr>
							<td className="duration">1989</td>
							<td className="content">Mindscapes Art Gallery of NSW, Sydney</td>
						</tr>
						<tr>
							<td className="duration">1988</td>
							<td className="content">The Cocktail Party Roslyn Oxley 9 Gallery, Sydney</td>
						</tr>
						<tr>
							<td className="duration">1987</td>
							<td className="content">
								Voyage of Discovery Australian Painting and Sculpture, Crescent Gallery, Dallas
							</td>
						</tr>
						<tr>
							<td className="duration">1987</td>
							<td className="content">Here and There Monash University Gallery, Melbourne</td>
						</tr>
						<tr>
							<td className="duration">1987</td>
							<td className="content">Chaos 11 Touring group Exhibition 1</td>
						</tr>
						<tr>
							<td className="duration">1985</td>
							<td className="content">On the Beach Macquarie Galleries, Sydney</td>
						</tr>
						<tr>
							<td className="duration">1984</td>
							<td className="content">Round Space at the Royal Society</td>
						</tr>
						<tr>
							<td className="duration">1984</td>
							<td className="content">Art Gallery of New South Wales, Sydney</td>
						</tr>
						<tr>
							<td className="duration">1984</td>
							<td className="content">Adelaide Artists Festival Fringe Centre ,Adelaide</td>
						</tr>
						<tr>
							<td className="duration">1984</td>
							<td className="content">Private Symbol, Social Metaphor 5th Biennale of Sydney</td>
						</tr>
						<tr>
							<td className="duration">1983</td>
							<td className="content">Australian Perspecta 83, Art Gallery of NSW, Sydney</td>
						</tr>
						<tr>
							<td className="duration">1983</td>
							<td className="content">
								Against The Wall Young Contemporary Artists National Gallery of Victoria
							</td>
						</tr>
						<tr>
							<td className="duration">1983</td>
							<td className="content">
								McCaughey Memorial Art Prize Exhibition National Gallery of Victoria
							</td>
						</tr>
						<tr>
							<td className="duration">1981</td>
							<td className="content">
								McCaughey Memorial Art Prize Exhibition National Gallery of Victoria
							</td>
						</tr>
						<tr>
							<td className="duration">1980</td>
							<td className="content">The Real Thing, Contemporary Art Society, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">1980</td>
							<td className="content">Micro Show, Contemporary Art Society, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">1980</td>
							<td className="content">Tarot Card, Contemporary Art Society, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">1978</td>
							<td className="content">
								Round Space Members, Union Gallery, University of Adelaide.
							</td>
						</tr>
						<tr>
							<td className="duration">1977</td>
							<td className="content">Young Artists Exhibition, Festival Centre, Adelaide</td>
						</tr>
					</tbody>
				</table>
				<SectionHeading>
					<Title>Prizes and Awards</Title>
				</SectionHeading>
				<table className="table ">
					<tbody className="">
						<tr>
							<td className="duration">2010</td>
							<td className="content">Arts SA Fellowship</td>
						</tr>
						<tr>
							<td className="duration">2009</td>
							<td className="content">Finalist, The Sir John Sulman Prize, AGNSW, Sydney</td>
						</tr>
						<tr>
							<td className="duration">2005</td>
							<td className="content">Finalist, The Archibald Prize, AGNSW, Sydney</td>
						</tr>
						<tr>
							<td className="duration">2004</td>
							<td className="content">Finalist, The Archibald Prize, AGNSW, Sydney</td>
						</tr>
						<tr>
							<td className="duration">2002</td>
							<td className="content">Finalist, The Sir John Sulman Prize, AGNSW, Sydney</td>
						</tr>
						<tr>
							<td className="duration">1999</td>
							<td className="content">Inaugural SALA Monograph recipient</td>
						</tr>
						<tr>
							<td className="duration">1999</td>
							<td className="content">
								Finalist, The Portia Geach Memorial Award, S.H. Ervin, Sydney
							</td>
						</tr>
						<tr>
							<td className="duration">1994</td>
							<td className="content">
								Finalist, John McCaughey Memorial Art Prize, NGV, Melbourne
							</td>
						</tr>
						<tr>
							<td className="duration">1993</td>
							<td className="content">
								Finalist, The Portia Geach Memorial Award, S.H. Ervin, Sydney
							</td>
						</tr>
						<tr>
							<td className="duration">1992</td>
							<td className="content">
								First Prize, Sara Weis Award, Heidi Museum of Modern Art, VIC
							</td>
						</tr>
						<tr>
							<td className="duration">1992</td>
							<td className="content">Finalist, The Sir John Sulman Prize, AGNSW, Sydney</td>
						</tr>
						<tr>
							<td className="duration">1990</td>
							<td className="content">Australia Council Fellowship</td>
						</tr>
						<tr>
							<td className="duration">1983</td>
							<td className="content">
								Finalist, John McCaughey Memorial Art Prize, NGV, Melbourne
							</td>
						</tr>
						<tr>
							<td className="duration">1981</td>
							<td className="content">
								Finalist, John McCaughey Memorial Art Prize, NGV, Melbourne
							</td>
						</tr>
						<tr>
							<td className="duration">1980</td>
							<td className="content">
								Co-winner, Maude Vizard Wholohan Art Prize, Art Gallery of South Australia, Adelaide
							</td>
						</tr>
						<tr>
							<td className="duration">1977</td>
							<td className="content">
								John Christie Wright Memorial Prize for Life Drawing and Painting
							</td>
						</tr>
					</tbody>
				</table>
				<SectionHeading>
					<Title>Grants</Title>
				</SectionHeading>
				<table className="table ">
					<tbody className="">
						<tr>
							<td className="duration">2005</td>
							<td className="content">New Work/ International Presentation Grant, Arts SA</td>
						</tr>
						<tr>
							<td className="duration">2004</td>
							<td className="content">Short notice grant, Arts SA</td>
						</tr>
						<tr>
							<td className="duration">2003</td>
							<td className="content">
								International Assistance Grant, Visual Arts Board, Australia Council
							</td>
						</tr>
						<tr>
							<td className="duration">2002</td>
							<td className="content">New Work Grant, Visual Arts Board, Australia Council</td>
						</tr>
						<tr>
							<td className="duration">2001</td>
							<td className="content">Project Grant, Arts SA</td>
						</tr>
						<tr>
							<td className="duration">1998</td>
							<td className="content">New Work Grant, Visual Arts Board, Australia Council</td>
						</tr>
						<tr>
							<td className="duration">1996</td>
							<td className="content">Project Grant, Arts SA</td>
						</tr>
						<tr>
							<td className="duration">1988</td>
							<td className="content">Individual Grant, Arts SA, Adelaide</td>
						</tr>
						<tr>
							<td className="duration">1986</td>
							<td className="content">Power Studio, Cite International des Arts, Paris, France</td>
						</tr>
						<tr>
							<td className="duration">1982</td>
							<td className="content">Standard Grant, Visual Arts Board, Australia Council</td>
						</tr>
					</tbody>
				</table>
				<SectionHeading>
					<Title>Commissions</Title>
				</SectionHeading>
				<table className="table ">
					<tbody className="">
						<tr>
							<td className="duration">1994</td>
							<td className="content">
								Victorian Parliament: Portrait of Joan Kirner, Victorian Premier '90-'92
							</td>
						</tr>
						<tr>
							<td className="duration">1982</td>
							<td className="content">
								South Australian Government: Entrance foyer, Adelaide Law Courts
							</td>
						</tr>
					</tbody>
				</table>
				<SectionHeading>
					<Title>Bibliography</Title>
				</SectionHeading>
				<table className="table ">
					<tbody className="">
						<tr>
							<td className="duration">2007</td>
							<td className="content">
								Annette Bezor: Painted Women. Ted Snell. Turner Galleries Exhib. Essay, Nov/Dec
							</td>
						</tr>
						<tr>
							<td className="duration">2007</td>
							<td className="content">
								Chris Reid. Florence Lynch Exhibition catalogue. New York Jan/Feb
							</td>
						</tr>
						<tr>
							<td className="duration">2004</td>
							<td className="content">Face to Face Rebecca Lancashire. The Age, August 14</td>
						</tr>
						<tr>
							<td className="duration">2003</td>
							<td className="content">
								Juliette Peers, Florence Lynch Gallery exhibition catalogue, May/June
							</td>
						</tr>
						<tr>
							<td className="duration">2003</td>
							<td className="content">
								M A Greenstein, Florence Lynch Gallery exhibition catalogue, May/June
							</td>
						</tr>
						<tr>
							<td className="duration">2002</td>
							<td className="content">David Broker, IMA catalogue essay. Brisbane, February</td>
						</tr>
						<tr>
							<td className="duration">2002</td>
							<td className="content">
								Survey of SA talent. Wendy Walker. The Advertiser, 7 August
							</td>
						</tr>
						<tr>
							<td className="duration">2002</td>
							<td className="content">Bold and Beautiful. Phil Brown. Brisbane News. February</td>
						</tr>
						<tr>
							<td className="duration">2002</td>
							<td className="content">Filmic Femmes. Sandra McLean. Courier Mail. January 26</td>
						</tr>
						<tr>
							<td className="duration">2002</td>
							<td className="content">
								Filmic thematic at IMA. Barbara Bolt. Real Time. April/May
							</td>
						</tr>
						<tr>
							<td className="duration">2001</td>
							<td className="content">
								The gaze of Aphrodite, Karen Kissane. The Age, September 23
							</td>
						</tr>
						<tr>
							<td className="duration">2001</td>
							<td className="content">Divide Bridged. Wendy Walker. The Advertiser, January 22</td>
						</tr>
						<tr>
							<td className="duration">2000</td>
							<td className="content">A Passionate Gaze. Richard Grayson. Monograph text</td>
						</tr>
						<tr>
							<td className="duration">1999</td>
							<td className="content">Thoughts on Dust, Anton Hart. Robert Lindsay Gallery</td>
						</tr>
						<tr>
							<td className="duration">1999</td>
							<td className="content">
								Panoramic perspective of artist's state. Peter Ward. The Australian. July 30
							</td>
						</tr>
						<tr>
							<td className="duration">1999</td>
							<td className="content">
								SurFace Tension, Chris Reid, Catalogue essay, Robert Lindsay Gallery
							</td>
						</tr>
						<tr>
							<td className="duration">1996</td>
							<td className="content">
								Richard Grayson, Blind, Greenaway Art Gallery, ARCO 96 Catalogue
							</td>
						</tr>
						<tr>
							<td className="duration">1995</td>
							<td className="content">
								Richard Grayson, Robert Lindsay Gallery Catalogue, February
							</td>
						</tr>
						<tr>
							<td className="duration">1992</td>
							<td className="content">
								Felicity Fenner, Sexuality in the work of six contemporary women painters, Art and
								Australia, Volume 30, No. 1, Spring
							</td>
						</tr>
						<tr>
							<td className="duration">1992</td>
							<td className="content">
								Sandy Kirby, Sight Lines - Women's Art and Feminist Perspectives in Australia,
								Craftsman House
							</td>
						</tr>
						<tr>
							<td className="duration">1992</td>
							<td className="content">Charles Green, Annette Bezor, Artforum, April</td>
						</tr>
						<tr>
							<td className="duration">1991</td>
							<td className="content">
								Jyanni Steffensen, A Desire of One's Own: The Politics and Poetics of Female
								(Erotic) Representation in Annette Bezor's Paintings, Annette Bezor 1980-1991,
								Contemporary Art Centre of South Australia, Adelaide
							</td>
						</tr>
						<tr>
							<td className="duration">1991</td>
							<td className="content">Christopher Heathcote, Reviews, The Age 25th September</td>
						</tr>
						<tr>
							<td className="duration">1991</td>
							<td className="content">
								Timothy Morrell, Ecstasy/Excess, Annette Bezor 1980-1991, Contemporary Art Centre of
								South Australia, Adelaide
							</td>
						</tr>
						<tr>
							<td className="duration">1991</td>
							<td className="content">
								Christopher Heathcote, Art is the Cinderella of yet another Melbourne Festival, The
								Age,18th September
							</td>
						</tr>
						<tr>
							<td className="duration">1990</td>
							<td className="content">
								Timothy Morrell, Ecstasy/Excess: Annette Bezor, Art & Australia
							</td>
						</tr>
						<tr>
							<td className="duration">1989</td>
							<td className="content">
								Ashley Crawford The bare kitsch of Bezor's women. The Herald,18th July
							</td>
						</tr>
						<tr>
							<td className="duration">1989</td>
							<td className="content">
								Ronald Miller Using black at its best, The Herald 8th August
							</td>
						</tr>
						<tr>
							<td className="duration">1989</td>
							<td className="content">Annette Bezor, The Australian Magazine, 25th March</td>
						</tr>
						<tr>
							<td className="duration">1988</td>
							<td className="content">
								John Neylon, Staying on the Edge The Adelaide Review, August
							</td>
						</tr>
						<tr>
							<td className="duration">1988</td>
							<td className="content">Elwyn Lynn, Unusual Woman. Weekend Australian 13th March</td>
						</tr>
						<tr>
							<td className="duration">1987</td>
							<td className="content">
								1987 Elaine Merkus, Here and There, Monash University Gallery, Melbourne
							</td>
						</tr>
						<tr>
							<td className="duration">1986</td>
							<td className="content">
								Neville Weston, Bezor keeps her head above water. The Advertiser 24th April
							</td>
						</tr>
						<tr>
							<td className="duration">1986</td>
							<td className="content">
								Elizabeth Gertsakis, Heads above water, Ex. Cat. Fine Arts Gallery, University of
								Tasmania, Hobart
							</td>
						</tr>
						<tr>
							<td className="duration">1983</td>
							<td className="content">
								Bernice Murphy, Australian Perspecta 83, Art Gallery of NSW, Sydney
							</td>
						</tr>
						<tr>
							<td className="duration">1983</td>
							<td className="content">
								Neville Weston, Eve's symbolic garden The Advertiser 26thOct, Adelaide
							</td>
						</tr>
						<tr>
							<td className="duration">1983</td>
							<td className="content">
								Robert Lindsay Against the Wall: Young Contemporary Artists selected from the
								Michell Endowment of the National Gallery of Victoria (broadsheet catalogue)
							</td>
						</tr>
						<tr>
							<td className="duration">1981</td>
							<td className="content">
								The Editors Who are Australia's Young Artists? Vogue Living, April/May
							</td>
						</tr>
					</tbody>
				</table>
				<SectionHeading>
					<Title>Collections</Title>
				</SectionHeading>
				<table className="table ">
					<tbody>
						<tr>
							<td className="content" colSpan="2">
								Broken Hill Regional Gallery, New South Wales
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								Tasmanian University Gallery
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								Wollongong Art Gallery, New South Wales
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								Artbank, Sydney
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								Sam & Minnie Smorgon Collection
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								BHP Billiton Collection
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								Rockhampton City Gallery
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								Art Gallery of South Australia, Adelaide
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								Auckland City Gallery, New Zealand
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								Art Gallery of New South Wales, Sydney
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								Victor & Lottie Smorgan Collection
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								I.C.I. Collection
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								Yarra Collection, Victoria
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								Mitchell Endowment, National Gallery of Victoria, Melbourne
							</td>
						</tr>
						<tr>
							<td className="content" colSpan="2">
								John Sands Collection
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Main>
	);
export default Biography;
