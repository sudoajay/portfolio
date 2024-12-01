export interface LogoDetails {
  logo: string
}

export interface PersonalDetails {
  name: string
  tagline: string
  img: string
  about: string
}

export interface SocialMediaUrl {
  linkedin: string
  github: string
}

export interface EducationDetail {
  Position: string
  Company: string
  Type: string
  Duration: string
}

export interface TechStackDetails {
  android: string
  nextjs: string
  spring_boot: string
  C_Sharp: string
  python: string
  django: string
  VB_NET: string
  html: string
  css: string
  js: string
  react: string
  redux: string
  sass: string
  tailwind: string
  bootstrap: string
  vscode: string
  android_studio: string
  IntelliJ_IDEA: string
  pycharm: string
  sublime: string
  unity: string
  ui_path: string
  postman: string
  npm: string
  git: string
  github: string
  figma: string
}

export interface ProjectDetail {
  title: string
  image: string
  description: string
  techstack: string
  previewLink: string
  githubLink: string
}

export interface ContactDetails {
  email: string
  phone: string
}

export interface AppDetails {
  logos: LogoDetails
  personalDetails: PersonalDetails
  socialMediaUrl: SocialMediaUrl
  eduDetails: EducationDetail[]
  techStackDetails: TechStackDetails
  projectDetails: ProjectDetail[]
  contactDetails: ContactDetails
}
