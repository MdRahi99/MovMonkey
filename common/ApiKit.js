import HttpKit from "./HttpKit";

const { client } = HttpKit;

const defaultFileUploadConfig = {
  headers: { "Content-Type": "multipart/form-data" },
};

const ApiKit = {
  auth: {
    customerRegister: (payload) => {
      const url = "/user/account/register-customer";
      return client.post(url, payload);
    },
    register: (payload) => {
      const url = "/user/account/register-service-provider";
      return client.post(url, payload, defaultFileUploadConfig);
    },
    login: (payload) => {
      const url = "/user/account/login";
      return client.post(url, payload);
    },
    googleLogin: (params) => {
      const url = `/social/auth/login/google`;
      return client.get(url, { params });
    },
  },

  forgotPassword: {
    sendMail: (payload) => {
      const url = "/user/account/forget-password-send-email";
      return client.post(url, payload);
    },
    resetPassword: (payload) => {
      const url = "/user/account/forget-password-reset";
      return client.post(url, payload);
    },
  },

  public: {
    category: {
      getDelivery: () => {
        const url = "/categories/delivery";
        return client.get(url);
      },
      getRemoval: () => {
        const url = "/categories/removal";
        return client.get(url);
      },
      getCleaningServices: () => {
        const url = "/categories/cleaning";
        return client.get(url);
      },
    },

    job: {
      all: {
        getJobs: (params) => {
          const url = "/public/jobs";
          return client.get(url, { params });
        },
      },
      delivery: {
        getJobs: (params) => {
          const url = "/public/jobs/delivery";
          return client.get(url, { params });
        },
        getJob: (slug) => {
          const url = `/public/jobs/delivery/${slug}`;
          return client.get(url);
        },
      },
      removal: {
        getJobs: (params) => {
          const url = "/public/jobs/removal";
          return client.get(url, { params });
        },
        getJob: (slug) => {
          const url = `/public/jobs/removal/${slug}`;
          return client.get(url);
        },
      },
      cleaning: {
        getJobs: (params) => {
          const url = "/public/jobs/cleaning";
          return client.get(url, { params });
        },
        getJob: (slug) => {
          const url = `/public/jobs/cleaning/${slug}`;
          return client.get(url);
        },
      },
    },
  },

  me: {
    getMe: () => {
      const url = "/me/profiles/home-page-headers";
      return client.get(url);
    },
    getProfile: () => {
      const url = "/me/profiles/details";
      return client.get(url);
    },
    updateProfile: (payload) => {
      const url = "/me/profiles/details";
      return client.patch(url, payload, defaultFileUploadConfig);
    },
    job: {
      delivery: {
        postJob: (payload) => {
          const url = "/me/jobs/delivery";
          return client.post(url, payload, defaultFileUploadConfig);
        },
        getJobs: (params) => {
          const url = "/me/jobs/delivery";
          return client.get(url, { params });
        },
      },
      removal: {
        postJob: (payload) => {
          const url = "/me/jobs/removal";
          return client.post(url, payload, defaultFileUploadConfig);
        },
        getJobs: (params) => {
          const url = "/me/jobs/removal";
          return client.get(url, { params });
        },
      },
      cleaning: {
        postJob: (payload) => {
          const url = "/me/jobs/cleaning";
          return client.post(url, payload, defaultFileUploadConfig);
        },
        getJobs: (params) => {
          const url = "/me/jobs/cleaning";
          return client.get(url, { params });
        },
      },
      active: {
        getJobs: () => {
          const url = "/me/jobs/actives?job_count=4";
          return client.get(url);
        },
      },
      completed: {
        getJobs: () => {
          const url = "/me/jobs/completed?job_count=4";
          return client.get(url);
        },
      },
      jobList: {
        getJobList: (params) => {
          const url = "/me/jobs";
          return client.get(url, { params });
        },
      },
    },
  },
};

export default ApiKit;
