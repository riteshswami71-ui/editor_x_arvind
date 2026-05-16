import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AdminUser, HealthStatus, Item, ItemInput, ItemUpdate, Job, JobInput, JobUpdate, ListItemsParams, ListJobsParams, LoginInput, LoginResult, Message, MessageInput, RequestUploadUrlBody, RequestUploadUrlResponse, SocialLinks, SocialLinksInput, Stats } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all messages (admin only)
 */
export declare const getListMessagesUrl: () => string;
export declare const listMessages: (options?: RequestInit) => Promise<Message[]>;
export declare const getListMessagesQueryKey: () => readonly ["/api/messages"];
export declare const getListMessagesQueryOptions: <TData = Awaited<ReturnType<typeof listMessages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof listMessages>>>;
export type ListMessagesQueryError = ErrorType<unknown>;
/**
 * @summary List all messages (admin only)
 */
export declare function useListMessages<TData = Awaited<ReturnType<typeof listMessages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Send a contact message
 */
export declare const getCreateMessageUrl: () => string;
export declare const createMessage: (messageInput: MessageInput, options?: RequestInit) => Promise<Message>;
export declare const getCreateMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createMessage>>, TError, {
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createMessage>>, TError, {
    data: BodyType<MessageInput>;
}, TContext>;
export type CreateMessageMutationResult = NonNullable<Awaited<ReturnType<typeof createMessage>>>;
export type CreateMessageMutationBody = BodyType<MessageInput>;
export type CreateMessageMutationError = ErrorType<unknown>;
/**
 * @summary Send a contact message
 */
export declare const useCreateMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createMessage>>, TError, {
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createMessage>>, TError, {
    data: BodyType<MessageInput>;
}, TContext>;
/**
 * @summary Get a single message
 */
export declare const getGetMessageUrl: (id: number) => string;
export declare const getMessage: (id: number, options?: RequestInit) => Promise<Message>;
export declare const getGetMessageQueryKey: (id: number) => readonly [`/api/messages/${number}`];
export declare const getGetMessageQueryOptions: <TData = Awaited<ReturnType<typeof getMessage>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMessage>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMessage>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMessageQueryResult = NonNullable<Awaited<ReturnType<typeof getMessage>>>;
export type GetMessageQueryError = ErrorType<void>;
/**
 * @summary Get a single message
 */
export declare function useGetMessage<TData = Awaited<ReturnType<typeof getMessage>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMessage>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Delete a message
 */
export declare const getDeleteMessageUrl: (id: number) => string;
export declare const deleteMessage: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMessage>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteMessage>>, TError, {
    id: number;
}, TContext>;
export type DeleteMessageMutationResult = NonNullable<Awaited<ReturnType<typeof deleteMessage>>>;
export type DeleteMessageMutationError = ErrorType<unknown>;
/**
 * @summary Delete a message
 */
export declare const useDeleteMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMessage>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteMessage>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Mark a message as read
 */
export declare const getMarkMessageReadUrl: (id: number) => string;
export declare const markMessageRead: (id: number, options?: RequestInit) => Promise<Message>;
export declare const getMarkMessageReadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markMessageRead>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markMessageRead>>, TError, {
    id: number;
}, TContext>;
export type MarkMessageReadMutationResult = NonNullable<Awaited<ReturnType<typeof markMessageRead>>>;
export type MarkMessageReadMutationError = ErrorType<unknown>;
/**
 * @summary Mark a message as read
 */
export declare const useMarkMessageRead: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markMessageRead>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markMessageRead>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary List items (portfolio, software, templates, plugins, editor visual)
 */
export declare const getListItemsUrl: (params?: ListItemsParams) => string;
export declare const listItems: (params?: ListItemsParams, options?: RequestInit) => Promise<Item[]>;
export declare const getListItemsQueryKey: (params?: ListItemsParams) => readonly ["/api/items", ...ListItemsParams[]];
export declare const getListItemsQueryOptions: <TData = Awaited<ReturnType<typeof listItems>>, TError = ErrorType<unknown>>(params?: ListItemsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listItems>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listItems>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListItemsQueryResult = NonNullable<Awaited<ReturnType<typeof listItems>>>;
export type ListItemsQueryError = ErrorType<unknown>;
/**
 * @summary List items (portfolio, software, templates, plugins, editor visual)
 */
export declare function useListItems<TData = Awaited<ReturnType<typeof listItems>>, TError = ErrorType<unknown>>(params?: ListItemsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listItems>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new item (admin)
 */
export declare const getCreateItemUrl: () => string;
export declare const createItem: (itemInput: ItemInput, options?: RequestInit) => Promise<Item>;
export declare const getCreateItemMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createItem>>, TError, {
        data: BodyType<ItemInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createItem>>, TError, {
    data: BodyType<ItemInput>;
}, TContext>;
export type CreateItemMutationResult = NonNullable<Awaited<ReturnType<typeof createItem>>>;
export type CreateItemMutationBody = BodyType<ItemInput>;
export type CreateItemMutationError = ErrorType<unknown>;
/**
 * @summary Create a new item (admin)
 */
export declare const useCreateItem: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createItem>>, TError, {
        data: BodyType<ItemInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createItem>>, TError, {
    data: BodyType<ItemInput>;
}, TContext>;
/**
 * @summary Get a single item
 */
export declare const getGetItemUrl: (id: number) => string;
export declare const getItem: (id: number, options?: RequestInit) => Promise<Item>;
export declare const getGetItemQueryKey: (id: number) => readonly [`/api/items/${number}`];
export declare const getGetItemQueryOptions: <TData = Awaited<ReturnType<typeof getItem>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getItem>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getItem>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetItemQueryResult = NonNullable<Awaited<ReturnType<typeof getItem>>>;
export type GetItemQueryError = ErrorType<void>;
/**
 * @summary Get a single item
 */
export declare function useGetItem<TData = Awaited<ReturnType<typeof getItem>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getItem>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update an item (admin)
 */
export declare const getUpdateItemUrl: (id: number) => string;
export declare const updateItem: (id: number, itemUpdate: ItemUpdate, options?: RequestInit) => Promise<Item>;
export declare const getUpdateItemMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateItem>>, TError, {
        id: number;
        data: BodyType<ItemUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateItem>>, TError, {
    id: number;
    data: BodyType<ItemUpdate>;
}, TContext>;
export type UpdateItemMutationResult = NonNullable<Awaited<ReturnType<typeof updateItem>>>;
export type UpdateItemMutationBody = BodyType<ItemUpdate>;
export type UpdateItemMutationError = ErrorType<unknown>;
/**
 * @summary Update an item (admin)
 */
export declare const useUpdateItem: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateItem>>, TError, {
        id: number;
        data: BodyType<ItemUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateItem>>, TError, {
    id: number;
    data: BodyType<ItemUpdate>;
}, TContext>;
/**
 * @summary Delete an item (admin)
 */
export declare const getDeleteItemUrl: (id: number) => string;
export declare const deleteItem: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteItemMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteItem>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteItem>>, TError, {
    id: number;
}, TContext>;
export type DeleteItemMutationResult = NonNullable<Awaited<ReturnType<typeof deleteItem>>>;
export type DeleteItemMutationError = ErrorType<unknown>;
/**
 * @summary Delete an item (admin)
 */
export declare const useDeleteItem: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteItem>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteItem>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get social media links
 */
export declare const getGetSocialLinksUrl: () => string;
export declare const getSocialLinks: (options?: RequestInit) => Promise<SocialLinks>;
export declare const getGetSocialLinksQueryKey: () => readonly ["/api/social-links"];
export declare const getGetSocialLinksQueryOptions: <TData = Awaited<ReturnType<typeof getSocialLinks>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSocialLinks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSocialLinks>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSocialLinksQueryResult = NonNullable<Awaited<ReturnType<typeof getSocialLinks>>>;
export type GetSocialLinksQueryError = ErrorType<unknown>;
/**
 * @summary Get social media links
 */
export declare function useGetSocialLinks<TData = Awaited<ReturnType<typeof getSocialLinks>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSocialLinks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update social media links (admin)
 */
export declare const getUpdateSocialLinksUrl: () => string;
export declare const updateSocialLinks: (socialLinksInput: SocialLinksInput, options?: RequestInit) => Promise<SocialLinks>;
export declare const getUpdateSocialLinksMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSocialLinks>>, TError, {
        data: BodyType<SocialLinksInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateSocialLinks>>, TError, {
    data: BodyType<SocialLinksInput>;
}, TContext>;
export type UpdateSocialLinksMutationResult = NonNullable<Awaited<ReturnType<typeof updateSocialLinks>>>;
export type UpdateSocialLinksMutationBody = BodyType<SocialLinksInput>;
export type UpdateSocialLinksMutationError = ErrorType<unknown>;
/**
 * @summary Update social media links (admin)
 */
export declare const useUpdateSocialLinks: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSocialLinks>>, TError, {
        data: BodyType<SocialLinksInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateSocialLinks>>, TError, {
    data: BodyType<SocialLinksInput>;
}, TContext>;
/**
 * @summary Get admin dashboard statistics
 */
export declare const getGetStatsUrl: () => string;
export declare const getStats: (options?: RequestInit) => Promise<Stats>;
export declare const getGetStatsQueryKey: () => readonly ["/api/stats"];
export declare const getGetStatsQueryOptions: <TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getStats>>>;
export type GetStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get admin dashboard statistics
 */
export declare function useGetStats<TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Admin login
 */
export declare const getAdminLoginUrl: () => string;
export declare const adminLogin: (loginInput: LoginInput, options?: RequestInit) => Promise<LoginResult>;
export declare const getAdminLoginMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
        data: BodyType<LoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
    data: BodyType<LoginInput>;
}, TContext>;
export type AdminLoginMutationResult = NonNullable<Awaited<ReturnType<typeof adminLogin>>>;
export type AdminLoginMutationBody = BodyType<LoginInput>;
export type AdminLoginMutationError = ErrorType<void>;
/**
 * @summary Admin login
 */
export declare const useAdminLogin: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
        data: BodyType<LoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminLogin>>, TError, {
    data: BodyType<LoginInput>;
}, TContext>;
/**
 * @summary Admin logout
 */
export declare const getAdminLogoutUrl: () => string;
export declare const adminLogout: (options?: RequestInit) => Promise<void>;
export declare const getAdminLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
export type AdminLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof adminLogout>>>;
export type AdminLogoutMutationError = ErrorType<unknown>;
/**
 * @summary Admin logout
 */
export declare const useAdminLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
/**
 * @summary Get current admin session
 */
export declare const getGetMeUrl: () => string;
export declare const getMe: (options?: RequestInit) => Promise<AdminUser>;
export declare const getGetMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<void>;
/**
 * @summary Get current admin session
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List job listings
 */
export declare const getListJobsUrl: (params?: ListJobsParams) => string;
export declare const listJobs: (params?: ListJobsParams, options?: RequestInit) => Promise<Job[]>;
export declare const getListJobsQueryKey: (params?: ListJobsParams) => readonly ["/api/jobs", ...ListJobsParams[]];
export declare const getListJobsQueryOptions: <TData = Awaited<ReturnType<typeof listJobs>>, TError = ErrorType<unknown>>(params?: ListJobsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listJobs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listJobs>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListJobsQueryResult = NonNullable<Awaited<ReturnType<typeof listJobs>>>;
export type ListJobsQueryError = ErrorType<unknown>;
/**
 * @summary List job listings
 */
export declare function useListJobs<TData = Awaited<ReturnType<typeof listJobs>>, TError = ErrorType<unknown>>(params?: ListJobsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listJobs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a job listing (admin)
 */
export declare const getCreateJobUrl: () => string;
export declare const createJob: (jobInput: JobInput, options?: RequestInit) => Promise<Job>;
export declare const getCreateJobMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createJob>>, TError, {
        data: BodyType<JobInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createJob>>, TError, {
    data: BodyType<JobInput>;
}, TContext>;
export type CreateJobMutationResult = NonNullable<Awaited<ReturnType<typeof createJob>>>;
export type CreateJobMutationBody = BodyType<JobInput>;
export type CreateJobMutationError = ErrorType<unknown>;
/**
 * @summary Create a job listing (admin)
 */
export declare const useCreateJob: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createJob>>, TError, {
        data: BodyType<JobInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createJob>>, TError, {
    data: BodyType<JobInput>;
}, TContext>;
/**
 * @summary Update a job listing (admin)
 */
export declare const getUpdateJobUrl: (id: number) => string;
export declare const updateJob: (id: number, jobUpdate: JobUpdate, options?: RequestInit) => Promise<Job>;
export declare const getUpdateJobMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateJob>>, TError, {
        id: number;
        data: BodyType<JobUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateJob>>, TError, {
    id: number;
    data: BodyType<JobUpdate>;
}, TContext>;
export type UpdateJobMutationResult = NonNullable<Awaited<ReturnType<typeof updateJob>>>;
export type UpdateJobMutationBody = BodyType<JobUpdate>;
export type UpdateJobMutationError = ErrorType<unknown>;
/**
 * @summary Update a job listing (admin)
 */
export declare const useUpdateJob: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateJob>>, TError, {
        id: number;
        data: BodyType<JobUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateJob>>, TError, {
    id: number;
    data: BodyType<JobUpdate>;
}, TContext>;
/**
 * @summary Delete a job listing (admin)
 */
export declare const getDeleteJobUrl: (id: number) => string;
export declare const deleteJob: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteJobMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteJob>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteJob>>, TError, {
    id: number;
}, TContext>;
export type DeleteJobMutationResult = NonNullable<Awaited<ReturnType<typeof deleteJob>>>;
export type DeleteJobMutationError = ErrorType<unknown>;
/**
 * @summary Delete a job listing (admin)
 */
export declare const useDeleteJob: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteJob>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteJob>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Request a presigned upload URL
 */
export declare const getRequestUploadUrlUrl: () => string;
export declare const requestUploadUrl: (requestUploadUrlBody: RequestUploadUrlBody, options?: RequestInit) => Promise<RequestUploadUrlResponse>;
export declare const getRequestUploadUrlMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
        data: BodyType<RequestUploadUrlBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
    data: BodyType<RequestUploadUrlBody>;
}, TContext>;
export type RequestUploadUrlMutationResult = NonNullable<Awaited<ReturnType<typeof requestUploadUrl>>>;
export type RequestUploadUrlMutationBody = BodyType<RequestUploadUrlBody>;
export type RequestUploadUrlMutationError = ErrorType<unknown>;
/**
 * @summary Request a presigned upload URL
 */
export declare const useRequestUploadUrl: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
        data: BodyType<RequestUploadUrlBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
    data: BodyType<RequestUploadUrlBody>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map