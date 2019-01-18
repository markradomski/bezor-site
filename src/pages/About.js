import React from 'react';
import Main from 'components/Main';
import styled from 'styled-components';
import * as constants from 'data/constants';

const SectionHeading = styled.div`
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

const Title = styled.h3``;

const BodyCopy = styled.div`
	> p {
		margin-bottom: 1rem;
	}
	.bold {
		font-weight: 500;
	}
`;

const FigCaption = styled.figcaption`
	font-style: italic;
	color: #a1a1a1;
	line-height: normal;
	margin-top: 1rem;
	margin-bottom: 1rem;
	font-weight: 300;
	font-size: 14px;
`;

const About = () => (
	<Main heading="The art of Annette Bezor">
		<div className="about">
			<BodyCopy>
				<p>
					Since the 1980s, Annette Bezor has been one of Australia's foremost painters. In her
					current work, she takes images of women from classical painting, contemporary decorative
					art and popular culture and recreates them as stylised icons to reveal and subvert the
					power and impact of the originals. In challenging viewers to meet the newly focussed gaze
					of these women, Bezor exposes the nature of society's attitudes to women and how they are
					represented in art and popular culture. She then situates these iconic figures in a
					surrealistic space to emphasise the roles, identities and emotional states of women
					generally. Her work is predicated on the assumption that personal identity and roles are,
					at least in part, culturally determined - we are products of our society. But she also
					believes that identity, thoughts, feelings, desires and sexuality run deeper than social
					programming. People are products of both socio-cultural and biological processes.
				</p>
			</BodyCopy>
			<div className="row">
				<div className="col-sm-8 offset-sm-2">
					<img
						className="img-fluid"
						alt=""
						src={`${constants.IMAGE_PATH_1000}entanglement-complicity-2010_lg.jpg`}
					/>
					<FigCaption>
						Entanglement - Complicity 2010, acrylic/oil on canvas, 180 x 280 cm
					</FigCaption>
				</div>
			</div>
			<BodyCopy>
				<p>
					These processes conflict with each other and create a degree of tension within individuals
					that depends on their circumstances. In various societies, at various times in history,
					these competing pressures produce quite different kinds of social constructs. These social
					constructs are reflected in the art of those societies, and Bezor re-employs that art as
					an analytical tool to reconsider contemporary mores and values. Bezor uses a range of
					painting techniques to support her analysis. Her <em>Entanglement</em> series of paintings
					(c1989-2011) are typically composites of several original and appropriated images located
					in a contrasting, expressionistic ground. The resulting visual construct becomes a
					metaphor for the construction of identity.
				</p>
				<p>
					<em>Entanglement Complicity</em> (2011), for example, clashes images of a Madonna and
					Child with Japanese Geisha and the classical art nude - three archetypal roles
					traditionally assigned to women in male-dominated societies - and the figures look as if
					they are emerging from a maelstrom. Her work can be categorised as postmodern by virtue of
					her appropriation of imagery and reconsideration of past art, but these strategies are
					intended to address the representation of women and women's sexuality as much as the
					nature or history of art itself. And while the painting techniques she uses question the
					nature of painting as an art form, they are primarily used to create powerful metaphors.
				</p>
			</BodyCopy>
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<img
						className="img-fluid"
						alt=""
						src={`${constants.IMAGE_PATH_1000}lookers-2011_lg.jpg`}
					/>
					<FigCaption>Lookers 2011, acrylic/oil on canvas, 165 x 165 cm</FigCaption>
				</div>
			</div>
			<BodyCopy>
				<p>
					In <em>Lookers</em> (2011), for example, the underpainting shows through the surface and
					appears physically ravaged, so that the pretty faces painted over the top appear damaged.
					The resulting imagery alludes to the superficial nature of beauty and suggests the
					inevitability and actuality of aging and deterioration.
				</p>
				<p>
					In the 1980s, Bezor's work resonated with the feminist reconsideration of art, with
					landscape art and with performance or body art, and frequently used the device of placing
					the female subject in settings atypical of modernist or classical approaches. Her early
					work was often realist in form, and she thus entered and revitalised traditionally
					male-dominated artistic territory.
				</p>
				<p>
					Paintings like <em>The Snake is Dead</em> (1981) suggested a radically different view of
					women in terms of their role, their subjectivity, the depiction of them, and the role of
					the artist. Two of the abiding themes in her painting can be seen to have been the
					feminist concern with the body and with the male gaze and its objectification of the
					female. <sup>1</sup>
				</p>
			</BodyCopy>
			<div className="row">
				<div className="col-sm-4 offset-sm-2">
					<img
						className="img-fluid"
						alt=""
						src={`${constants.IMAGE_PATH_1000}snake-is-dead-1981_lg.jpg`}
					/>
					<FigCaption>The Snake is Dead 1981, oil on canvas, 175 x 130 cm</FigCaption>
				</div>
				<div className="col-sm-4">
					<img
						className="img-fluid"
						alt=""
						src={`${constants.IMAGE_PATH_1000}insatiate-desires_1-1995_lg.jpg`}
					/>
					<FigCaption>Insatiate Desires 2 1995, acrylic/oil/ink on fabric, 300 x 150 cm</FigCaption>
				</div>
			</div>
			<BodyCopy>
				<p>
					In addition to addressing Australia's tradition of landscape art,
					<em>The Snake is Dead</em> depicts the subject in a pose recalling classical nudes such as
					Goya's <em>Maja</em> and Titian's <em>Venus d'Urbino</em>. But, as Richard Grayson
					suggests, it turns the idea upside down - the woman here is not the sexual object/model of
					the male artist.<sup>2</sup>
				</p>
				<p>
					Nor is this painting, while suggesting erotic pleasure, itself erotic. The second,
					lipstick-marked wine glass in the foreground suggests another female picnicker, perhaps a
					viewer (the artist?) engaged on an equal footing with her in the event. The peregrine
					falcon overhead, fleeing with the snake, symbolises the castration of the male view, as
					well as the flight from Eden of the seducing serpent. In one work, Bezor thus inverted
					central assumptions underpinning centuries of Western art. She also reclaims women's
					sexuality, the visual expression of which had for so long been appropriated by men.
				</p>
				<p>
					Since the late 1980s, Bezor has frequently used the canvas as a metaphor for the body and
					mind. For example, her <em>Insatiate Desires 2 </em>(1995) includes a self-portrait
					superimposed in outline form 'overlooking' an appropriated drawing. Above these images are
					two other images of female faces, one of them Ingres' <em>Mlle Riviere</em>, and the whole
					work resembles a series of stains on the canvas, as if these events or individuals have
					left the mark of their existence as a record. The work has a dream-like quality, as if the
					artist is fantasising. Bezor sometimes employed the idea of the canvas as a record stained
					with or by the characters depicted, as is suggested by <em>Intercourse 2</em> (1990).
				</p>
				<p>
					In some early works she used mattress ticking instead of canvas, directly referring to the
					bed as the site of action, and indicating that what is being recorded is the passion of
					the character depicted. In so doing, she moved away from perspectival construction towards
					layered panels of imagery that defeat the representation of depth of field and deny the
					viewer's location in a space related to the action.
				</p>
			</BodyCopy>
			<div className="row">
				<div className="col-sm-4 offset-sm-2">
					<img
						className="img-fluid"
						alt=""
						src={`${constants.IMAGE_PATH_1000}intercourse_2-1990_lg.jpg`}
					/>
					<FigCaption>Intercourse 1 1990, oil on fabric, 70 x 70 cm</FigCaption>
				</div>
				<div className="col-sm-4">
					<img
						className="img-fluid"
						alt=""
						src={`${constants.IMAGE_PATH_1000}tension_3-Night-Hush-2002_lg.jpg`}
					/>
					<FigCaption>Tension 3 1999, oil on canvas, 165 x 165 cm</FigCaption>
				</div>
			</div>
			<BodyCopy>
				<p>
					Bezor's picture space became a theatre of the mind, the viewer being provoked to engage
					with the imagery rather than to participate imaginatively in a realistic narrative.
				</p>
				<p>
					During the 1990s, Bezor's work showed an increasing concern with the depiction of women in
					contemporary media, and with the ubiquity and impersonality of contemporary media such as
					magazines. She addressed these issues through her choice of subject matter and through the
					form of her work.
				</p>
				<p>
					The images in the <em>Tension</em> series (for example <em>Tension 3</em>, 1999) are
					painted with shading to suggest three-dimensional form, but also appear flat, as if the
					shading is stylized, represented as itself rather than used to create an illusory effect.
					She painted multiple versions of the one painting, addressing the issue of repetition both
					to challenge ideas of authenticity and to mimic the replicability of images in
					contemporary society. Used repeatedly and shown in groups, either as original paintings or
					as laser scans, these faces became symbols or motifs. She replicated them in different
					tones, identifying the important signifiers, and also rendering them banal - deliberately
					saturating the viewer with imagery to trivialise the image and so shift the meaning again.
				</p>
				<p>
					In her <em>Smoulder</em> series, begun around 2000, Bezor extended the techniques and
					ideas in the Tension series to address pornography. The 'subject' of <em>Smoulder I</em>
					(2000) is appropriated from pornographic magazine imagery. Here, the woman's body, which
					is central to pornography, has been deleted, and we see only the face.
				</p>
			</BodyCopy>
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<img
						className="img-fluid"
						alt=""
						src={`${constants.IMAGE_PATH_1000}cherry-float_1-2003_lg.jpg`}
					/>
					<FigCaption>Smoulder 2 2000, oil on canvas, 165 x 165 cm</FigCaption>
				</div>
			</div>
			<BodyCopy>
				<p>
					This image is an index to the image of a body rather than an actual body, and the
					(imagined) image of the body is in turn an index to the subject matter, that is, the
					fantasised sexual encounter. Rather than painting the 'prostitute' from life, as might
					have been the Nineteenth Century Parisian modernist's approach, Bezor has painted a
					contemporary version of the subject filtered by contemporary media and mores. The work
					thus functions on many levels - as a portrait (of an anonymous subject); as an index to
					the pornographic image; as an index to and comment on the painting of women as desirable
					objects; as a comment on the return of the gaze; and as a representation of woman in
					extremis, the viewer's 'victim'. In Griselda Pollock's terms, this painting reframes the
					'sexual politics of looking.'<sup>3</sup>
				</p>
				<p>
					The reworking of femininity in the <em>Smoulder</em> series is by way of the deletion of
					the body to deny the traditional male gaze. It also lies in the choice of a subject whose
					facial expression conveys a mixture of fear and sexual ardour, attesting to the frequency
					of ambivalent feelings in personal relationships. The Smoulder series establishes a form
					of pop art that appropriates and reconsiders imagery from popular culture. Where male
					painters of bygone eras represented women in ways that objectified them, Bezor bestows
					subjectivity on her 'models', confronting the viewer's voyeuristic monopoly of erotic
					response. She represents the passions these women feel, and how these passions give rise
					to social and sexual activity. In place of images that induce sexual passions in the
					viewer, the passions are themselves represented, denying the viewer's potentially erotic
					response, but acknowledging the power and presence of human sexuality.
				</p>
				<p>
					More recently, her strategy in the <em>Face Value</em> series (c2010-2011) is to
					caricature models who pose for her or images of women from popular culture - for example,
					the 'Asian' figures in this series have been given blue eyes and red hair - and overlay
					them with translucent bands of colour to mask their characters and turn their portraits
					into abstract paintings. This challenge to the nature of painting and its categorisation
					in formal terms is intended to support the challenge to the categorisation of women in
					terms of ethnic and cultural identity, as well as to remind viewers that women are still
					so often regarded as merely decorative objects.
				</p>
			</BodyCopy>
			<div className="row">
				<div className="col-sm-4 offset-sm-2">
					<img
						className="img-fluid"
						alt=""
						src={`${constants.IMAGE_PATH_1000}face-value_4-2010_lg.jpg`}
					/>
					<FigCaption>Face Value 4 2010, oil on canvas 140 x 140 cm</FigCaption>
				</div>
				<div className="col-sm-4">
					<img
						className="img-fluid"
						alt=""
						src={`${constants.IMAGE_PATH_1000}silent-violence-2011_lg.jpg`}
					/>
					<FigCaption>The Silent Violence 2011, acrylic/oil on canvas, 165 x 165 cm</FigCaption>
				</div>
			</div>
			<BodyCopy>
				<p>
					In <em>The Silent Violence</em> (2011), one of a series entitled <em>Silent Violent</em>
					(2009-2011), Bezor exaggerates the superficial prettiness of the Geisha by stylising the
					figures and posing them with flowers and goldfish. The women appear in close contact but
					their intimacy is circumscribed by the manners of their culture. Their gaze is inward and
					they are disconnected - emblematic and untouchable. Ultimately, they must be silent,
					though their mask-like expressions betray suppressed emotion.
					<br />
					The concept of beauty evident in The Silent Violence has parallels in all societies. Bezor
					says her work is, "representative of a psychological and emotional space that people
					inhabit but are silent about. We all have this - a passive exterior, inside which is a
					Pandora's box."<sup>4</sup>
				</p>
				<p>
					She believes that, in being taught to behave according to the rules of our society, we
					submerge our deepest feelings beneath a civilised facade, even to the extent that we are
					unable to recognise our own turbulent inner states and the damage we do to ourselves and
					others.
				</p>
				<p>
					Annette Bezor's work establishes an alternative psycho-social space in which the
					appropriation of imagery prompts the re-evaluation of the cultural power and significance
					of that imagery. She has adapted painting in unique ways to suit her purpose and, over her
					career, has confirmed and extended the role of the independent woman artist and has
					participated in the debate over art history. Bezor has made a significant impact on the
					idea and nature of painting in contemporary art.
				</p>
				<p className="bold">Chris Reid, July 2011</p>
			</BodyCopy>
			<SectionHeading>
				<Title>Bibliography</Title>
			</SectionHeading>
			<BodyCopy>
				<p>
					Richard Grayson, <em>A Passionate Gaze</em>, Wakefield Press, Adelaide, 2000
					<br />
					Griselda Pollock,
					<em>Vision and Difference-Feminism, Femininity and the Histories of Art</em>, Routledge,
					London, 1988
				</p>
				<p>
					<sup> &nbsp;1</sup> The word 'gaze' here refers to the directional look of the viewer, and
					is typically associated with the male view of the female subject.
					<br />
					<sup> &nbsp;2</sup> Richard Grayson, <em>A Passionate Gaze</em>, Wakefield Press,
					Adelaide, 2000, p. 4.
					<br />
					<sup> &nbsp;3</sup> Pollock discusses the question of whether women artists such as Berthe
					Morisot and Mary Cassatt can be complicit in reinforcing a male way of viewing, thus
					reinforcing female passivity, and goes on to discuss the reworking of feminine space and
					the gaze. (Griselda Pollock,
					<em>Vision and Difference-Feminism, Femininity and the Histories of Art</em>, Routledge,
					London, 1988, p. 87.) Bezor reworks the gaze and the spaces of femininity.
					<br />
					<sup> &nbsp;4</sup> Annette Bezor, in conversation with the author, 2010.
					<br />
				</p>
				<p>&nbsp;</p>
			</BodyCopy>
		</div>
	</Main>
);

export default About;
