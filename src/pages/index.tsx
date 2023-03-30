import HeaderTags from '@components/HeaderTags';

import ModuleWrapper from "@components/Wrappers/ModuleWrapper";
import Layout from '@containers/layout';
import HeroModule from '@components/LandingPage/HeroModule'
import SplitModule from '@components/Modules/SplitModule';
import { ReviewsModule } from '@components/Reviews/ReviewsModule';
import { ReviewsSideModule } from '@components/Reviews/ReviewsSideModule';


export default function Home(): React.ReactNode {
  return (
    <Layout>
      <HeaderTags
        title="Newsletter Review"
        description="Rate, review, and browse newsletters that you, your friends, and the world are subscribed to."
        image="/subscribe-symbol.png"
        url="https://newsletterhub.com"
      />
      <ModuleWrapper>
          <HeroModule/>
          <SplitModule
            leftComponent={<ReviewsModule/>}
            rightComponent={<ReviewsSideModule/>}
            widerSide="left"
          />
      </ModuleWrapper>
    </Layout>
  )
}