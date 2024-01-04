import RunningDesign from '@/src/components/ui/running-design/RunningDesign';

const AboutPage = () => {
	return (
		<section>
			<div className='container'>
				<div className='space-y-5'>
					<h2 className='font-medium font-editorialNew text-lg text-orange-400'>
						gtkm
					</h2>
					<p className='font-medium text-xl leading-relaxed'>
						I&apos;m Tazkiya Mujahid (pronounced &quot;TAZ-kee-yah
						Moo-jahid&quot;), a Jakarta-based Junior Quality Assurance
						enthusiast and an undergraduate student at Mercu Buana University,
						majoring in Information System. I have a flair for crafting seamless
						digital experiences. In the tech realm, I specialize in testing
						automation using tools like TypeScript, Node.js, and Playwright,
						prioritizing precision and quality.
					</p>
					<p className='font-medium text-xl leading-relaxed'>
						Beyond code, I infuse creativity into UI/UX projects, adding a touch
						of graphic design finesse. I prefer function declarations and
						descriptive TypeScript types and thrive on creative problem-solving.
					</p>
					<p className='font-medium text-xl leading-relaxed'>
						I&apos;m deeply passionate about design—I&apos;ve had the joy of
						crafting captivating visuals and user experiences during my time at
						Heulaulastudios. Design isn&apos;t just a skill for me; it&apos;s a
						love affair. I find immense joy in the creative process, infusing
						every project with a touch of aesthetic finesse.
					</p>
				</div>
			</div>
			<div className='my-10'>
				<RunningDesign />
			</div>
		</section>
	);
};

export default AboutPage;
