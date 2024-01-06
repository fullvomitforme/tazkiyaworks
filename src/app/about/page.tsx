import RunningDesign from '@/src/components/ui/running-design/RunningDesign';
import { buttonVariants } from '@/src/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<section>
			<div className='container'>
				<div className='space-y-5'>
					<h2 className='font-medium text-lg text-orange-400'>GTKM</h2>
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
			<div className='container space-y-5'>
				<div className='flex flex-row items-center justify-between'>
					<p className='font-medium text-lg text-orange-400'>WORK</p>
					<Link className={buttonVariants({ variant: 'default' })} href={'/'}>
						DOWNLOAD RESUME
					</Link>
				</div>
				<div>
					<div className='border-2 border-orange-400 rounded-lg'>
						<div className='flex flex-row p-5 items-center space-x-5'>
							<Image
								src={'/work/looking.png'}
								width={120}
								height={120}
								alt='looking for you'
							/>
							<div>
								<p className='font-medium mb-4'>??? (this could be you!)</p>
								<p>
									I&apos;m on the lookout for exciting remote freelance
									opportunities as a dedicated Quality Assurance Tester. If you
									need someone who values excellence and delivers results,
									let&apos;s connect! Reach out at{' '}
									<Link
										href={'mailto:tazkiyadigitalarchive@gmail.com'}
										className='font-medium'
									>
										tazkiyadigitalarchive@gmail.com
									</Link>
									, and let&apos;s discuss how I can contribute to your
									projects. 🚀
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
